import React from "react";
import "../styles.css";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input 
      type="checkbox" 
      checked={props.todosData.completed} 
      onChange={()=> props.handleChange(props.todosData.id)} 
      />
      <label>{props.todosData.text}</label>
      <br />
    </div>
  );
}

export default ToDoItem;
