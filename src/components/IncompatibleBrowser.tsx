import {Component} from "react"
import styled from "styled-components"
import dolphinSad from "../assets/dolphin-sad.png"

const StyledIncompatibleBrowser = styled.div`
    margin: 20px;
    padding: 20px;
    color: rgb(154, 25, 126);
    text-align: center;
    font-family: 'Boodle', sans-serif;
`

export default class IncompatibleBrowser extends Component {
    render() {
        return (
            <StyledIncompatibleBrowser className="incompatible-browser">
                <h1>Browser Incompatibility</h1>
                <img style={{
                    width: "60%",
                    imageRendering: "pixelated"
                }} src={dolphinSad} alt="Sad Dolphin"></img>
                <p>
                    Unfortunately, your current browser does not support the features
                    required by our application.
                </p>
                <p>
                    We recommend using the latest version of a Chromium Based Browser
                    like: Microsoft Edge or Brave Browser
                </p>
            </StyledIncompatibleBrowser>
        )
    }
}
