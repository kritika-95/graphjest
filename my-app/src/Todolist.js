import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import "./index.css";
 
class TodoList extends Component {

     constructor(props) {
    super(props);
    this.state = {
    items: [],
    

  };
 
 
    this.addItem = this.addItem.bind(this);
    this.deleteitems=this.deleteitems.bind(this);
    
  }

 /* validate=()=>{
      let a=document.frm.item.value;
     if(a===""){
         alert("cannot be empty");
         return false;
     }
     return true;
  }*/

 

 
//deleting..
  deleteitems(key){
  let r= window.confirm("Are you sure ?");
      if(r===true){                                                    //if want to remove item
    var remaining = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: remaining
  });
      }
      else{

      }
  }
   

  //adding....
  addItem(e) {
      


      if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }


  else{
      document.getElementById("02").innerHTML="Add Item*";                          //if item is not added
      document.getElementById("01").style.borderColor="red";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
 

  
 
  }
   
render() {
  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={this.addItem} name="frm">
          <input ref={(a) => this._inputElement = a} name="item" id="01" 
                  placeholder="enter numbers">
          </input>
          
          <button type="submit" onClick="validate">Add</button><br/>
          <p id="02" style={{color:"red"}}/>
        </form>
       
      </div>
      <TodoItems entries={this.state.items} delete={this.deleteitems} complete={this.completeitem}/>
    </div>
  );
}
}
export default TodoList;