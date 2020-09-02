import React from "react";
import "./App.css";

const API_URL = "/api/todos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      tasks: []
    };
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  // This is called automatically when component is appended to the DOM
  componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        // upon success, update tasks
        this.setState({ tasks: json });
      })
      .catch(error => {
        console.log("ERROR in componentDidMount():", error);
      });
  }

  async addTask(event) {
    event.preventDefault();

    // Create new task
    const task = { text: this.state.input, complete: 0 };

    // fetch() options
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    };

    try {
      const response = await fetch(API_URL, options);
      if (response.ok) {
        let newTasks = await response.json();
        console.log(newTasks);
        this.setState({ tasks: newTasks });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      console.log("EXCEPTION:", err.message);
    }

    this.setState({ input: "" });
  }

  async updateTask(id) {
    // Find index of item
    const task = this.state.tasks.find(t => t.id === id);
    task.complete = !task.complete; // toggle it!

    // fetch() options
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    };

    try {
      const response = await fetch(`${API_URL}/${id}`, options);
      if (response.ok) {
        const newTasks = await response.json();
        this.setState({ tasks: newTasks });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      console.log("EXCEPTION:", err.message);
    }
  }

  async deleteTask(id) {
    // fetch() options
    const options = {
      method: "DELETE"
    };

    try {
      const response = await fetch(`${API_URL}/${id}`, options);
      if (response.ok) {
        const newTasks = await response.json();
        this.setState({ tasks: newTasks });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      console.log("EXCEPTION:", err.message);
    }
  }

  render() {
    // Build array of <li> elems with text and two buttons
    const tasksJsx = this.state.tasks.map(t => (
      <li className={t.complete ? "complete" : null} key={t.id}>
        {t.text}
        <button onClick={e => this.updateTask(t.id)} type="button">
          done
        </button>
        <button onClick={e => this.deleteTask(t.id)} type="button">
          delete
        </button>
      </li>
    ));

    return (
      <div className="App">
        <h1>To Do List</h1>

        <h2>Things To Do</h2>
        <ul>{tasksJsx}</ul>

        <h2>Add a New Task</h2>
        <form onSubmit={e => this.addTask(e)}>
          <label>
            New Task:
            <input
              onChange={e => this.updateInput(e)}
              value={this.state.input}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
