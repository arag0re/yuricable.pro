import React, { Component } from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { WebLinksAddon } from 'xterm-addon-web-links'
import 'xterm/css/xterm.css'
interface CLIState {
   isConnected: boolean
}
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
      flowControl?: 'none' | 'hardware'
      parity?: 'none' | 'even' | 'odd'
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

let reader: ReadableStreamDefaultReader | ReadableStreamBYOBReader | undefined
let port: SerialPort | undefined
class CLI extends Component<{}, CLIState> {
   flipperDeviceFilter: SerialPortRequestOptions
   term: Terminal
   fitAddon: FitAddon
   encoder: TextEncoder
   terminalElement: HTMLElement | null

   constructor(props: any) {
      super(props)

      this.state = {
         isConnected: false,
      }

      this.flipperDeviceFilter = {
         filters: [
            {
               usbVendorId: 1155,
            },
         ],
      }

      this.terminalElement = document.getElementById('terminal')

      // Terminal setup
      this.term = new Terminal({
         scrollback: 10_000,
         rows: 35,
         cursorBlink: true,
         cursorStyle: 'block',
         cursorInactiveStyle: 'none',
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
      if (this.terminalElement) {
         const existingClass = Array.from(this.terminalElement.classList).find(
            (className) => className.startsWith('xterm-dom-renderer-owner-'),
         )

         // Remove the existing class if found
         if (existingClass) {
            this.terminalElement.classList.toggle(existingClass, true)
         }

         // Toggle the new class
         //const className = `xterm-dom-renderer-owner-${digit}`
         //terminalElement.classList.toggle(className, true)
      }
   }

   initializeTerminal() {
      const { term } = this
      if (this.terminalElement) {
         term.open(this.terminalElement)

         term.loadAddon(this.fitAddon)
         term.loadAddon(new WebLinksAddon())
         //this.fitAddon.fit()
         term.onData((data) => {})
      }
   }

   setupEventListeners() {
      // Add your event listeners here
   }

   downloadTerminalContents(): void {
      if (!this.term) {
         throw new Error('no terminal instance found')
      }

      if (this.term.rows <= 1) {
         console.log('No output yet')
         return
      }

      this.term.selectAll()
      const contents = this.term.getSelection()
      console.log('contents: ' + contents)
      if (contents === '  ') {
         console.log('No output yet')
         return
      }
      this.term.clearSelection()
      const linkContent = URL.createObjectURL(
         new Blob([new TextEncoder().encode(contents).buffer], {
            type: 'text/plain',
         }),
      )
      const fauxLink = document.createElement('a')
      fauxLink.download = `terminal_content_${new Date().getTime()}.txt`
      fauxLink.href = linkContent
      fauxLink.click()
   }

   async requestAndOpenPort() {
      try {
         port = await navigator.serial.requestPort(this.flipperDeviceFilter)
         if (!port) {
            return
         }
         console.log(port)
         //this.setState({ port })
         await port.open({
            baudRate: 115200,
            bufferSize: 8 * 1024,
            dataBits: 8,
            stopBits: 1,
            parity: 'none',
            flowControl: 'none',
         })
         this.term.clear()
         this.term.writeln('<CONNECTED>')
         console.log('opened port')
         this.setState({ isConnected: true })
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
               reader = port.readable.getReader({ mode: 'byob' })
            } catch {
               reader = port.readable.getReader()
            }

            let buffer = null
            for (;;) {
               // eslint-disable-next-line no-loop-func
               const { value, done } = await (async () => {
                  if (reader instanceof ReadableStreamBYOBReader) {
                     if (!buffer) {
                        buffer = new ArrayBuffer(8 * 1024)
                     }
                     const { value, done } = await reader.read(
                        new Uint8Array(buffer, 0, 8 * 1024),
                     )
                     buffer = value?.buffer
                     return { value, done }
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
      this.term.writeln('<DISCONNECTED>')
      port = undefined
      this.setState({ isConnected: false })
   }

   clearTerminalContents(): void {
      if (!this.term) {
         throw new Error('no terminal instance found')
      }

      if (this.term.rows === 0) {
         console.log('No output yet')
         return
      }

      this.term.clear()
   }

   onResize() {
      this.fitAddon.fit()
   }
   render() {
      return (
         <div>
            <div id="terminal" ref={(el) => (this.terminalElement = el)}></div>

            {this.state.isConnected ? (
               <button id="disconnect" onClick={this.disconnectFromPort}>
                  Disconnect
               </button>
            ) : (
               <button id="request-port" onClick={this.requestAndOpenPort}>
                  Connect
               </button>
            )}

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

export default CLI
