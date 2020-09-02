import React from "react";
import AdminView from "./components/adminView";
import UserView from "./components/userView";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminView: false,
      projects: [
        {
          title: "baby no.1",
          description: "Golden Retriever",
          image: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
        },
        {
          title: "baby no.2",
          description: "Maltese",
          image:
            "https://i.pinimg.com/originals/fa/bf/c0/fabfc0124567dec5037bae7b943762b5.jpg"
        },
        {
          title: "baby no.3",
          description: "German Shepherd",
          image:
            "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11181218/German-Shepherd-puppies.jpg"
        }
      ]
    };
  }

  addProject(newProject) {
    this.setState({
      projects: [...this.state.projects, newProject]
    });
  }

  changeUser(isAdmin) {
    this.setState({ adminView: isAdmin });
  }

  render() {
    return (
      <div>
        <div className="button">
          <button
            className={this.state.adminView ? "active" : ""}
            onClick={() => this.changeUser(true)}>ADMIN</button>

          <button
            className={!this.state.adminView ? "active" : ""}
            onClick={() => this.changeUser(false)}>USER</button>
        </div>
        {
          this.state.adminView
            ? <AdminView addProject={newProject => this.addProject(newProject)} />
            : <UserView projects={this.state.projects} />
        }

      </div>
    );
  }
}

export default App;
