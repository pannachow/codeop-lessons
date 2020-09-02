import React from "react";

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredProject: this.props.projects[0]
    };
  }

  setFeaturedProject(project) {
    this.setState({ featuredProject: project });
  }

  render() {
    return (
      <div className="UserView">
        <h1>User View</h1>
        <div class="horizontal">
          <div class="field">
            <img
              alt={this.state.featuredProject.description}
              id="featured-img"
              src={this.state.featuredProject.image}
            />
          </div>

          <div class="field">
            <h2 id="fpt">{this.state.featuredProject.title}</h2>
            <p id="fpd">{this.state.featuredProject.description}</p>
          </div>
        </div>

        <div id="images">
          {this.props.projects.map((project) => (
            <img
              alt={project.description}
              onClick={() => this.setFeaturedProject(project)}
              class="image"
              src={project.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default UserView;
