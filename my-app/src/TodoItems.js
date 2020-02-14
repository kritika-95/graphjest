import React, { Component } from "react";
import './index.css';
 
class TodoItems extends Component {
 
    constructor(props){
      super(props);
this.createTasks = this.createTasks.bind(this);

    }
//deleting numbers
    delete(key){
        
        this.props.delete(key);
    }

    //strikethrough
    complete(){
        

    }
  

//this function will add numbers
  createTasks(item) {
    return( 
        <div display="inline">
   
    <li key={item.key}>{item.text}</li>
     <button onClick={()=>this.delete(item.key)} >Remove</button>
     <button onClick={()=>this.complete()}>Complete</button>
       </div> 
        
        )
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;