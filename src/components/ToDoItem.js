import React from "react";
import "../styles.css";

function ToDoItem(props) {
  function message(){
    console.log("Something have changed")
  }
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todosData.completed} onChange={message} />
      <label>{props.todosData.text}</label>
      <br />
    </div>
  );
}

export default ToDoItem;
