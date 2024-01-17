import {Component} from "react";
import CLIButton, {CLIButtonProps} from "./CLIButton";
import {HTMLProps} from "../App";

type CLICommandButtonProps = CLIButtonProps & {
    port: SerialPort
    command: string
}

const encoder = new TextEncoder()

export default class CLICommandButton extends Component<HTMLProps<CLICommandButtonProps, CLIButton>> {
    async run() {
        if (this.props.port?.writable == null) {
            console.warn(`unable to find writable port`)
            return
        }
        const writer = this.props.port.writable.getWriter()
        await writer.write(encoder.encode("/" + this.props.command + "\x0d"))
        writer.releaseLock()
    }

    render() {
        return <CLIButton {...this.props as unknown as CLIButtonProps} onClick={this.run.bind(this)}/>;
    }

}