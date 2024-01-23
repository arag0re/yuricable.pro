import {Component} from "react"
import {Terminal} from "xterm"
import {FitAddon} from "xterm-addon-fit"
import {WebLinksAddon} from "xterm-addon-web-links"
import "xterm/css/xterm.css"
import {TbPlugConnected, TbPlugConnectedX} from "react-icons/tb"
import CLIButton from "./CLIButton"
import {BsFiletypeTxt} from "react-icons/bs"
import {GiBroom, GiPauseButton, GiPlayButton} from "react-icons/gi"
import CLICommandButton from "./CLICommandButton"
import {AiFillCode} from "react-icons/ai"
import {MdOutlineLockReset} from "react-icons/md"
import {LuTimerReset} from "react-icons/lu"
import styled from "styled-components"

const StyledTerminal = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    min-width: 500px;
    height: 88vh;
    background-color: black;
`

const StyledButtonContainer = styled.div`
    position: absolute;
    width: 100%;
`
const StyledConnectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledConnectButton = styled.button`
    margin-top: 35%;
    color: white;
    background-color: rgb(154, 25, 126);
    padding: 10px;
    border: 1px solid #c58bc5;
    border-radius: 10px;
    font-size: large;
    font-weight: bold;
    transition: background-color 0.3s ease;
    font-family: 'Boodle', sans-serif;
    display: inline-flex;
    align-items: flex-end;

    &:hover {
        color: rgb(154, 25, 126);
        border-color: rgb(154, 25, 126);
        background-color: #c58bc5;
    }
`

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

        forget(): Promise<undefined>

        close(): Promise<undefined>

        getInfo(): SerialPortInfo

        getSignals(): Promise<any>

        setSignals(options: any): Promise<any>

        open(options: SerialPortOpenOptions): Promise<undefined>
    }

    class Serial extends EventTarget {
        requestPort(options?: SerialPortRequestOptions): Promise<SerialPort>

        getPorts(): Promise<SerialPort[]>
    }

    interface Navigator {
        serial: Serial
    }
}

interface CLIState {
    reader: ReadableStreamDefaultReader | null
    port: SerialPort | null
}

class CLI extends Component<{}, CLIState> {
    flipperDeviceFilter: SerialPortRequestOptions
    term: Terminal
    fitAddon: FitAddon
    encoder: TextEncoder
    terminalElement: HTMLElement | null

    constructor(props: any) {
        super(props)

        this.state = {
            reader: null,
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
            scrollback: 100_000,
            rows: 32,
            cols: 130,
            cursorBlink: true,
            cursorStyle: "block",
            cursorInactiveStyle: "none",
        })

        this.fitAddon = new FitAddon()
        this.encoder = new TextEncoder()
        this.term.onData(async (data) => {
            if (this.state.port?.writable == null) {
                console.warn(`unable to find writable port`)
                return
            }
            const writer = this.state.port.writable.getWriter()
            await writer.write(this.encoder.encode(data))
            writer.releaseLock()
        })

        // Event handlers
        this.onResize = this.onResize.bind(this)
        this.requestAndOpenPort = this.requestAndOpenPort.bind(this)
        this.disconnectFromPort = this.disconnectFromPort.bind(this)
        this.downloadTerminalContents = this.downloadTerminalContents.bind(this)
        this.clearTerminalContents = this.clearTerminalContents.bind(this)
    }

    componentDidMount() {
        this.initializeTerminal()
    }

    initializeTerminal() {
        const {term} = this
        if (this.terminalElement) {
            term.open(this.terminalElement)

            term.loadAddon(this.fitAddon)
            term.loadAddon(new WebLinksAddon())
            this.fitAddon.activate(term)
            this.fitAddon.fit()
            term.onData((data) => {
            })
        }
    }

    downloadTerminalContents(): void {
        if (!this.term) {
            throw new Error("no terminal instance found")
        }

        if (this.term.rows <= 1) {
            console.log("No output yet")
            return
        }

        this.term.selectAll()
        const contents = this.term.getSelection()
        console.log("contents: " + contents)
        if (contents === "") {
            console.log("No output yet")
            return
        }
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
        const port = await navigator.serial.requestPort(this.flipperDeviceFilter)
        if (!port) {
            return
        }
        await port.open({
            baudRate: 115200,
            bufferSize: 8 * 1024,
            dataBits: 8,
            stopBits: 1,
            parity: "none",
            flowControl: "none",
        })
        port.addEventListener("disconnect", this.disconnectFromPort.bind(this))
        this.term.clear()
        this.fitAddon.fit()
        this.term.writeln("<CONNECTED>")
        this.setState({port})
        ;(async () => {
            if (port?.readable) {
                const reader = port.readable.getReader()
                this.setState({reader})
                try {
                    while (true) {
                        const {value, done} = await reader.read()

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
                    if (this.state.reader) {
                        if (this.state.port?.readable.locked) {
                            this.state.reader.releaseLock()
                        }
                        this.setState({reader: null})
                    }
                }
            }
        })().finally()
    }

    async disconnectFromPort(): Promise<void> {
        // Move |port| into a local variable so that connectToPort() doesn't try to
        // close it on exit.
        const localPort = this.state.port

        if (this.state.reader) {
            await this.state.reader.cancel()
        }

        this.setState({port: null, reader: null})

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
        this.term.clear()
        this.markDisconnected()
    }

    markDisconnected(): void {
        this.term.writeln("<DISCONNECTED>")
        this.setState({port: null, reader: null})
        this.fitAddon.fit()
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

    onResize() {
        this.fitAddon.fit()
    }

    render() {
        window.onresize = this.onResize
        return (
            <>
                <style>{"body {overflow: hidden;}"}</style>
                {!this.state.port ? (
                    <StyledConnectContainer>
                        <StyledConnectButton
                            className="connectbutton"
                            onClick={this.requestAndOpenPort}
                        >
                            <TbPlugConnected id="connect-icon"/>
                            <span className="connectbutton-text">
                        Connect Flipper Zero
                     </span>
                        </StyledConnectButton>
                    </StyledConnectContainer>
                ) : (
                    <StyledButtonContainer>
                        <CLIButton
                            id="disconnect-button"
                            icon={TbPlugConnectedX}
                            onClick={this.disconnectFromPort}
                            toolTipText="Disconnect"
                        />
                        <CLIButton
                            id="download-button"
                            icon={BsFiletypeTxt}
                            onClick={this.downloadTerminalContents}
                            toolTipText="Download"
                        />
                        <CLIButton
                            id="clear-button"
                            icon={GiBroom}
                            onClick={this.clearTerminalContents}
                            toolTipText="Clear Terminal"
                        />
                        <CLICommandButton
                            id="start-button"
                            icon={GiPlayButton}
                            command={"start"}
                            port={this.state.port}
                            toolTipText="Start Listening"
                        />
                        <CLICommandButton
                            id="stop-button"
                            icon={GiPauseButton}
                            command={"stop"}
                            port={this.state.port}
                            toolTipText="Stop Listening"
                        />
                        <CLICommandButton
                            id="dcsd-button"
                            icon={AiFillCode}
                            command={"mode dcsd"}
                            port={this.state.port}
                            toolTipText="Bootlog - DCSD"
                        />
                        <CLICommandButton
                            id="reset-button"
                            icon={LuTimerReset}
                            command={"mode reset"}
                            port={this.state.port}
                            toolTipText="Mode Reset"
                        />
                        <CLICommandButton
                            id="dfu-button"
                            icon={MdOutlineLockReset}
                            command={"mode dfu"}
                            port={this.state.port}
                            toolTipText="Mode DFU"
                        />
                    </StyledButtonContainer>
                )}
                <StyledTerminal
                    id="terminal"
                    className={!this.state.port ? "hidden" : "visible"}
                    ref={(el) => (this.terminalElement = el)}
                />
            </>
        )
    }
}

export default CLI
