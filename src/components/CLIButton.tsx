import React, {Component} from "react"
import type {IconType} from "react-icons"
import {HTMLProps} from "../App";

export type CLIButtonProps = {
    icon: IconType
    toolTipText: string
}

export default class CLIButton extends Component<HTMLProps<CLIButtonProps, HTMLButtonElement>> {

    render() {
        return (
            <button className="clibutton clearbutton" {...this.props}>
                {React.createElement(this.props.icon, {id: "clear"})}
                <span className="tooltip">{this.props.toolTipText}</span>
            </button>
        )
    }
}
