import React from "react";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      description: ""
    };
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    this.props.addProject({
      title: this.state.title,
      image: this.state.image,
      description: this.state.description,
    });
  }


  render() {
    return (
      <div className="AdminView">
        <h1>MY PORTFOLIO</h1>
        <h2>Add New Project</h2>
        <form>
          <div class="horizontal">
            <label class="field">
              Project Title
              <input name="title" onChange={e => this.handleInputChange(e)} />
            </label>

            <label class="field">
              Image URL
              <input name="image" onChange={e => this.handleInputChange(e)} />
            </label>
          </div>

          <label class="field">
            Project Description
            <textarea name="description" onChange={e => this.handleInputChange(e)} />
          </label>
        </form>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}

export default AdminView;
