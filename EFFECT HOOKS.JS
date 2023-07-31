import React from "react"
import ReactDOM from "react-dom"
class Tablecreation extends React.Component{
  render(){
    return(
    <table>
      <tr><Rowcreation/></tr>
    </table>
    )
  }
}
class Rowcreation extends React.Component{
  render(){
    return(
      <React.Fragment>
        <td>SELVA</td>
        <td>RASAN</td>
        </React.Fragment>
    )
  }
}
ReactDOM.render(<Tablecreation/>,document.getElementById("root"));