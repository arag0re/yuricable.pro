import { Component } from 'react'
import styled from 'styled-components'

const StyledNotFound = styled.div`
   margin: 20px;
   padding: 20px;
   border: 1px solid blue;
   border-radius: 5px;
   text-align: center;
`

export default class NotFound extends Component {
   render() {
      return (
         <StyledNotFound className="not-found">
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>
               You can always go back to the <a href="/">homepage</a>.
            </p>
         </StyledNotFound>
      )
   }
}
