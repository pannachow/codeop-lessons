import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { done: false, message: "Go to gym" },
        { done: false, message: "Pay my bills" },
        { done: false, message: "Walk my dog" }
      ]
    };
    this.messageRef = React.createRef();
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
    this.setState(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newTodos = [
      ...this.state.todos,
      { done: false, message: this.messageRef.current.value }
    ];
    newTodos.sort((a, b) => a.message.localeCompare(b.message));

    this.messageRef.current.value = "";

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>To Do List</h3>

        <form id="form">
          <ul className="todos">
            {this.state.todos.map(todo => (
              <li className="todo">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={e => this.toggleTodo(todo)}
                />
                <span className={todo.done ? "done" : ""}>{todo.message}</span>
              </li>
            ))}
          </ul>

          <label>
            <input ref={this.messageRef} type="text" />
          </label>

          <br />

          <button onClick={e => this.handleSubmit(e)}>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
