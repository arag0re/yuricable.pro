import React, {Component} from "react"
import {Terminal} from "xterm"
import {FitAddon} from "xterm-addon-fit"
import {WebLinksAddon} from "xterm-addon-web-links"
import "xterm/css/xterm.css"

declare global {

    interface SerialPortInfo {
        usbVendorId?: number
        usbProductId?: number
    }

    interface SerialPortRequestOptions {
        filters: SerialPortInfo[]
    }

    interface SerialPortOpenOptions {
        baudRate: number
        bufferSize?: number
        dataBits?: 7 | 8
        flowControl?: "none" | "hardware"
        parity?: "none" | "even" | "odd"
        stopBits?: 1 | 2
    }

    export class SerialPort extends EventTarget {
        readonly readable: ReadableStream
        readonly writable: WritableStream

        forget(): Promise<undefined>;

        close(): Promise<undefined>;

        getInfo(): SerialPortInfo;

        getSignals(): Promise<any>;

        setSignals(options: any): Promise<any>;

        open(options: SerialPortOpenOptions): Promise<undefined>;
    }

    class Serial extends EventTarget {
        requestPort(options?: SerialPortRequestOptions): Promise<SerialPort>;

        getPorts(): Promise<SerialPort[]>;
    }

    interface Navigator {
        serial: Serial
    }
}

let reader: ReadableStreamDefaultReader | ReadableStreamBYOBReader | undefined
let port: SerialPort | undefined
const termStyle = {
    height: "70%",
}

class Console extends Component<{}> {
    flipperDeviceFilter: SerialPortRequestOptions
    term: Terminal
    fitAddon: FitAddon
    encoder: TextEncoder
    terminalElement: HTMLElement | null

    constructor(props: any) {
        super(props)

        this.state = {
            port: null,
        }
        this.flipperDeviceFilter = {
            filters: [
                {
                    usbVendorId: 1155,
                },
            ],
        }

        this.terminalElement = document.getElementById("terminal")

        // Terminal setup
        this.term = new Terminal({
            scrollback: 10_000,
        })
        this.fitAddon = new FitAddon()
        this.encoder = new TextEncoder()
        //let toFlush = ''
        this.term.onData((data) => {
            if (port?.writable == null) {
                console.warn(`unable to find writable port`)
                return
            }
            const writer = port.writable.getWriter()
            writer.write(this.encoder.encode(data))
            writer.releaseLock()
        })

        this.term.loadAddon(this.fitAddon)
        this.term.loadAddon(new WebLinksAddon())
        // Event handlers
        this.requestAndOpenPort = this.requestAndOpenPort.bind(this)
        this.disconnectFromPort = this.disconnectFromPort.bind(this)
        this.downloadTerminalContents = this.downloadTerminalContents.bind(this)
        this.clearTerminalContents = this.clearTerminalContents.bind(this)
    }

    componentDidMount() {
        this.initializeTerminal()
        this.setupEventListeners()
    }

    initializeTerminal() {
        const {term} = this
        if (this.terminalElement) {
            term.open(this.terminalElement)
            term.loadAddon(this.fitAddon)
            term.loadAddon(new WebLinksAddon())

            term.onData((data) => {
            })
        }
    }

    setupEventListeners() {
        // Add your event listeners here
    }

    downloadTerminalContents(): void {
        if (!this.term) {
            throw new Error("no terminal instance found")
        }

        if (this.term.rows === 0) {
            console.log("No output yet")
            return
        }

        this.term.selectAll()
        const contents = this.term.getSelection()
        this.term.clearSelection()
        const linkContent = URL.createObjectURL(
            new Blob([new TextEncoder().encode(contents).buffer], {
                type: "text/plain",
            }),
        )
        const fauxLink = document.createElement("a")
        fauxLink.download = `terminal_content_${new Date().getTime()}.txt`
        fauxLink.href = linkContent
        fauxLink.click()
    }

    async requestAndOpenPort() {
        port = await navigator.serial.requestPort(this.flipperDeviceFilter)
        if (!port) {
            return
        }
        try {
            console.log(port)
            //this.setState({ port })
            await port.open({
                baudRate: 115200,
                bufferSize: 255,
                dataBits: 8,
                stopBits: 1,
                parity: "none",
                flowControl: "none",
            })
            this.term.writeln("<CONNECTED>")
            console.log("opened port")
        } catch (error) {
            //console.error('Error requesting or opening port:', error)
            console.error(error)
            if (error instanceof Error) {
                this.term.writeln(`<ERROR: ${error.message}>`)
            }
            this.markDisconnected()
            return
        }

        while (port && port.readable) {
            try {
                try {
                    reader = port.readable.getReader({mode: "byob"})
                } catch {
                    reader = port.readable.getReader()
                }

                let buffer = null
                for (; ;) {
                    const {value, done} = await (async () => {
                        if (reader instanceof ReadableStreamBYOBReader) {
                            if (!buffer) {
                                buffer = new ArrayBuffer(255)
                            }
                            const {value, done} = await reader.read(
                                new Uint8Array(buffer, 0, 255),
                            )
                            buffer = value?.buffer
                            return {value, done}
                        } else {
                            return await reader.read()
                        }
                    })()

                    if (value) {
                        await new Promise<void>((resolve) => {
                            this.term.write(value, resolve)
                        })
                    }
                    if (done) {
                        break
                    }
                }
            } catch (e) {
                console.error(e)
                await new Promise<void>((resolve) => {
                    if (e instanceof Error) {
                        this.term.writeln(`<ERROR: ${e.message}>`, resolve)
                    }
                })
            } finally {
                if (reader) {
                    reader.releaseLock()
                    reader = undefined
                }
            }
        }

        if (port) {
            try {
                await port.close()
            } catch (e) {
                console.error(e)
                if (e instanceof Error) {
                    this.term.writeln(`<ERROR: ${e.message}>`)
                }
            }

            this.markDisconnected()
        }
    }

    async disconnectFromPort(): Promise<void> {
        // Move |port| into a local variable so that connectToPort() doesn't try to
        // close it on exit.
        const localPort = port
        port = undefined

        if (reader) {
            await reader.cancel()
        }

        if (localPort) {
            try {
                await localPort.close()
            } catch (e) {
                console.error(e)
                if (e instanceof Error) {
                    this.term.writeln(`<ERROR: ${e.message}>`)
                }
            }
        }

        this.markDisconnected()
    }

    markDisconnected(): void {
        this.term.writeln("<DISCONNECTED>")
        port = undefined
    }

    clearTerminalContents(): void {
        if (!this.term) {
            throw new Error("no terminal instance found")
        }

        if (this.term.rows === 0) {
            console.log("No output yet")
            return
        }

        this.term.clear()
    }

    render() {
        return (
            <div>
                <div
                    style={termStyle}
                    id="terminal"
                    ref={(el) => (this.terminalElement = el)}
                ></div>
                <button id="request-port" onClick={this.requestAndOpenPort}>
                    Connect
                </button>
                <button id="disconnect" onClick={this.disconnectFromPort}>
                    Disconnect
                </button>
                <button id="download" onClick={this.downloadTerminalContents}>
                    Download
                </button>
                <button id="clear" onClick={this.clearTerminalContents}>
                    Clear
                </button>
            </div>
        )
    }
}

export default Console
