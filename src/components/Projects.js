import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return(
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
        );
      });
    }

    console.log(this.props);
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {this.props.test}
        {projectItems}
      </div>
    );
  }
}

// Causes 'undefined' error
// 
// ProjectItems.propTypes = {
//   projects: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }

export default Projects;
