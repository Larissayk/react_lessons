import React from "react";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import ToDodata from "./ToDodata";
import "../src/styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ToDodata
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedState = prevState.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      });
      console.log(prevState.todos)
      console.log("up",updatedState)
      return {
        todos: updatedState
      };
    });
  }

  render() {
    const ToDoList = this.state.todos.map(item => (
      <ToDoItem
        key={item.id}
        todosData={item}
        handleChange={this.handleChange}
      />
    )); //todosData é o nome do props que vai ser passado e usado no ToDoItem function. Eu posso dar qualquer nome, mas o mesmo tem que ser usado no props.

    return (
      <div className="todo-list">
        <Header />
        {ToDoList}
      </div>
    );
  }
}

export default App;
