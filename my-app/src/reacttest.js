// app/src/Login.js
import React from 'react';
//import ReactDOM from "react-dom";

class ReactTest extends React.Component {
    constructor(props) {
  super(props);
  this.state = {
   Add:""
  };


// this.additems=this.additems.bind(this);
 }
 handleInputChange = (event) => {
  this.setState({
   [event.target.name]: event.target.value
  })
};


 render() {
  return (
   <form className='login' >
     <label>Add:</label>
     <input id='01' onChange={this.handleInputChange}  type='text' placeholder="Add number.." />
     <button id='02'   type="submit" className="button">Add</button>
   </form>
  )
 }
}
export default ReactTest;