import React, { Component } from 'react';
import { FaGithub, FaExternalLinkAlt, FaRobot } from 'react-icons/fa';

class Portfolio extends Component {
  render() {
    let projects   = null;
    let aiProjects = null;

    if (this.props.data) {
      projects = this.props.data.projects.map(project => {
        const projectImage = 'images/portfolio/' + project.image;
        const techTags = (project.techStack || []).map(t => (
          <span key={t} className="pf-project-tag">{t}</span>
        ));
        return (
          <div key={project.title} className="col-12 col-sm-6 col-lg-4">
            <div className="pf-project-card h-100">
              <div className="pf-project-img-wrap">
                <img src={projectImage} alt={project.title} className="pf-project-img" />
                <div className="pf-project-overlay">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      className="pf-overlay-btn" title="View Live">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="pf-overlay-btn" title="GitHub">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
              <div className="pf-project-body">
                <div className="pf-project-cat">{project.category}</div>
                <div className="pf-project-title">{project.title}</div>
                <p className="pf-project-desc">{project.description}</p>
                <div className="pf-project-tags">{techTags}</div>
              </div>
            </div>
          </div>
        );
      });

      if (this.props.data.aiProjects) {
        aiProjects = this.props.data.aiProjects.map(project => {
          const techTags  = (project.techStack || []).map(t => (
            <span key={t} className="pf-ai-tag">{t}</span>
          ));
          const features = (project.features || []).map(f => (
            <li key={f} className="pf-ai-feature">{f}</li>
          ));
          return (
            <div key={project.title} className="col-12 col-sm-6 col-lg-4">
              <div className="pf-ai-card h-100">
                <div className="pf-ai-header">
                  <div className="pf-ai-icon"><FaRobot /></div>
                  <div>
                    <div className="pf-ai-cat">{project.category}</div>
                    <div className="pf-ai-title">{project.title}</div>
                  </div>
                </div>
                <p className="pf-ai-desc">{project.description}</p>
                {features.length > 0 && (
                  <ul className="pf-ai-features">{features}</ul>
                )}
                <div className="pf-ai-footer">
                  <div className="pf-ai-tags">{techTags}</div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="pf-ai-link">
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        });
      }
    }

    return (
      <section id="portfolio" className="pf-section">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">Projects & Works</span>
            <h2 className="pf-section-title">What I've built</h2>
            <div className="pf-divider"></div>
            <p className="pf-section-desc">
              A selection of engineering projects demonstrating technical breadth and execution quality.
            </p>
          </div>

          <div className="row g-4 reveal-stagger">
            {projects}
          </div>

          {aiProjects && (
            <>
              <div className="pf-section-header mt-5 mb-4 reveal"
                style={{ borderTop: '1px solid rgba(99,102,241,0.2)', paddingTop: '56px' }}>
                <span className="pf-section-label" style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8' }}>
                  AI Projects
                </span>
                <h2 className="pf-section-title">AI-powered developer tooling</h2>
                <div className="pf-divider"></div>
                <p className="pf-section-desc">
                  Intelligent engineering tools built with AI APIs to supercharge developer workflows.
                </p>
              </div>
              <div className="row g-4 reveal-stagger">
                {aiProjects}
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default Portfolio;
