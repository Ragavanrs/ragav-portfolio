import React, { Component } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

class Portfolio extends Component {
  render() {
    var projects = null;
    if (this.props.data) {
      projects = this.props.data.projects.map(function (project) {
        var projectImage = 'images/portfolio/' + project.image;
        var techTags = (project.techStack || []).map(function (tech) {
          return <span key={tech} className="portfolio-tech-tag">{tech}</span>;
        });
        return (
          <div key={project.title} className="portfolio-card">
            <div className="portfolio-card-image">
              <img alt={project.title} src={projectImage} />
              <div className="portfolio-overlay">
                <div className="portfolio-overlay-links">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" title="View Live">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="portfolio-card-content">
              <span className="portfolio-category">{project.category}</span>
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <div className="portfolio-tech-stack">
                {techTags}
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio" className="section-portfolio">
        <div className="row">
          <div className="twelve columns">
            <h2 className="section-title">Projects &amp; Works</h2>
            <p className="section-subtitle">
              A selection of projects that demonstrate my technical breadth and execution.
            </p>
          </div>
        </div>
        <div className="portfolio-grid">
          {projects}
        </div>
      </section>
    );
  }
}

export default Portfolio;
