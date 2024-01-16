import React, { Component } from 'react'
import type { IconType } from 'react-icons/lib/index'

interface CLIButtonProps {
   onClick?: () => void
   icon: IconType
   toolTipText: string
}

class CLIButton extends Component<CLIButtonProps> {
   icon: IconType
   toolTipText: string
   constructor(props: CLIButtonProps) {
      super(props)
      this.icon = props.icon
      this.toolTipText = props.toolTipText
   }

   render() {
      const { onClick } = this.props

      return (
         <div>
            <button className="clibutton clearbutton" onClick={onClick}>
               {React.createElement(this.icon, { id: 'clear' })}
               <span className="tooltip">{this.toolTipText}</span>
            </button>
         </div>
      )
   }
}

export default CLIButton
