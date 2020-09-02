import React, { Component } from "react";
import "./App.css";

const API_URL = "http://localhost:5001/students";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnameInput: "",
      lastnameInput: "",
      students: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      this.setState({ students: json });
    } catch (error) {
      console.log("ERROR in componentDidMount():", error);
    }
  }

  async addStudent(e) {
    e.preventDefault();

    // Create a new student
    const student = {
      firstname: this.state.firstnameInput,
      lastname: this.state.lastnameInput
    };

    // fetch() options
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    };

    try {
      const response = await fetch(API_URL, options);
      if (response.ok) {
        const newStudents = await response.json();
        console.log(newStudents);
        this.setState({ students: newStudents });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      console.log("EXCEPTION:", err.message);
    }

    this.setState({
      firstnameInput: "",
      lastnameInput: ""
    });
  }

  updateFirstnameInput(e) {
    this.setState({
      firstnameInput: e.target.value
    });
  }

  updateLastnameInput(e) {
    this.setState({
      lastnameInput: e.target.value
    });
  }

  async deleteStudent(id) {
    const options = {
      method: "DELETE"
    };

    try {
      const response = await fetch(`${API_URL}/${id}`, options);
      if (response.ok) {
        const newStudents = await response.json();
        this.setState({ students: newStudents });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      console.log("EXCEPTION:", err.message);
    }
  }

  render() {
    const students = this.state.students.map(s => (
      <li key={s.id}>
        {s.firstname} {s.lastname}
        <button onClick={e => this.deleteStudent(s.id)}>delete</button>
      </li>
    ));
    return (
      <div>
        <h1>CodeOp's Facebook</h1>

        <h2>List of students</h2>
        <ul>{students}</ul>

        <h2>Add New Students</h2>
        <form>
          <label>
            First name:
            <input
              onChange={e => this.updateFirstnameInput(e)}
              value={this.state.firstnameInput}
            />
          </label>
          <br />
          <label>
            Last name:
            <input
              onChange={e => this.updateLastnameInput(e)}
              value={this.state.lastnameInput}
            />
          </label>
          <br />
          <button onClick={e => this.addStudent(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
