import React, {Component} from "react"
import type {IconType} from "react-icons"
import {HTMLProps} from "../App";

type CLIButtonProps = {
    icon: IconType
    toolTipText: string
}

class CLIButton extends Component<HTMLProps<CLIButtonProps, HTMLButtonElement>> {

    render() {
        return (
            <button className="clibutton clearbutton" {...this.props}>
                {React.createElement(this.props.icon, {id: "clear"})}
                <span className="tooltip">{this.props.toolTipText}</span>
            </button>
        )
    }
}

export default CLIButton
