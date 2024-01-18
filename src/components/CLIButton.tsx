import React, { Component } from 'react'
import type { IconType } from 'react-icons'
import { HTMLProps } from '../App'
import styled from 'styled-components'

const StyledToolTip = styled.span`
   visibility: hidden;
   width: 120px;
   background-color: black;
   color: #fff;
   text-align: center;
   border-radius: 4px;
   padding: 3px;
   position: absolute;
   z-index: 1;
   font-size: small;
   top: 100%;
   left: 50%;
   transform: translateX(-50%);
   font-family: 'Boodle', sans-serif;
`
const StyledCLIButton = styled.button`
   position: relative;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   width: 40px;
   height: 40px;
   padding: 10px;
   z-index: 1;
   background-color: rgb(154, 25, 126);
   transition: background-color 0.3s ease;
   border: none;
   box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.66);

   &:hover {
      box-shadow: none;
      background-color: #c58bc5;
   }

   &:hover #clibutton-icon {
      color: rgb(154, 25, 126);
   }

   &:hover .tooltip {
      visibility: visible;
   }

   & #clibutton-icon {
      color: white;
      height: 30px;
      width: 30px;
   }
`

export type CLIButtonProps = {
   icon: IconType
   toolTipText: string
}

export default class CLIButton extends Component<
   HTMLProps<CLIButtonProps, HTMLButtonElement>
> {
   render() {
      return (
         <StyledCLIButton className="clibutton" {...this.props}>
            {React.createElement(this.props.icon, { id: 'clibutton-icon' })}
            <StyledToolTip className="tooltip">
               {this.props.toolTipText}
            </StyledToolTip>
         </StyledCLIButton>
      )
   }
}
