import React, { Component } from 'react';
import { FaLayerGroup } from 'react-icons/fa';

class ArchitectureProjects extends Component {
  render() {
    var projects = null;
    if (this.props.data && this.props.data.projects) {
      projects = this.props.data.projects.map(function (project) {
        var techTags = project.techStack.map(function (tech) {
          return <span key={tech} className="tech-tag">{tech}</span>;
        });
        return (
          <div key={project.name} className="arch-card">
            <div className="arch-card-header">
              <FaLayerGroup size={24} className="arch-icon" />
              <h3 className="arch-name">{project.name}</h3>
            </div>
            <p className="arch-architecture"><strong>Architecture:</strong> {project.architecture}</p>
            <div className="arch-tech-stack">
              {techTags}
            </div>
            <div className="arch-details">
              <div className="arch-detail-block">
                <h4>Challenge</h4>
                <p>{project.challenges}</p>
              </div>
              <div className="arch-detail-block">
                <h4>Outcome</h4>
                <p>{project.outcome}</p>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="architecture" className="section-architecture">
        <div className="row">
          <div className="twelve columns">
            <h2 className="section-title">Architecture &amp; Systems</h2>
            <p className="section-subtitle">
              Production-grade systems designed, built, and delivered at scale.
            </p>
          </div>
        </div>
        <div className="arch-grid">
          {projects}
        </div>
      </section>
    );
  }
}

export default ArchitectureProjects;
