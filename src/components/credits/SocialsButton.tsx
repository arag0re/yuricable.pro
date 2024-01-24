import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSocialsButton = styled.a`
   .socials-logo {
      transition: transform 0.8s ease-in-out;
   }

   &:hover .socials-tooltip {
      visibility: visible;
   }

   &:hover .socials-logo {
      transform: rotate(360deg);
   }
`

const StyledToolTip = styled.span`
   visibility: hidden;
   width: 120px; /* Adjust width based on your content */
   background-color: black;
   color: #fff;
   text-align: center;
   border-radius: 4px;
   padding: 3px;
   position: absolute;
   z-index: 1;
   font-size: small;
   margin-top: 50px;
   transform: translateX(-60%);
   font-family: 'Boodle', sans-serif;
`

export type SocialsButtonProps = {
   svgActive: string
   svgInactive: string
   href: string
   altText: string
   tooltipText: string
   className?: string
}

export default class SocialsButton extends Component<
   SocialsButtonProps,
   { hover: boolean }
> {
   state = {
      hover: false,
   }

   toggleHover = () => {
      this.setState({ hover: !this.state.hover })
   }

   render() {
      const { svgActive, svgInactive, href, altText, tooltipText, className } =
         this.props
      const { hover } = this.state

      return (
         <StyledSocialsButton
            className={`socials-button ${className || ''}`}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            href={href}
            target="_blank"
            rel="noreferrer"
         >
            <img
               className="socials-logo"
               src={hover ? svgActive : svgInactive}
               alt={altText}
               style={{ height: '40px', width: '40px' }}
            />
            <StyledToolTip className="socials-tooltip">
               {tooltipText}
            </StyledToolTip>
         </StyledSocialsButton>
      )
   }
}
