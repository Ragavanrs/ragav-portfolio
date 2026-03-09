import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    let projects = null;
    let aiProjects = null;

    if (this.props.data) {
      projects = this.props.data.projects.map(function (project) {
        var projectImage = 'images/portfolio/' + project.image;
        var techBadges = (project.techStack || []).map(function (tech) {
          return (
            <span key={tech} className="badge bg-secondary me-1 mb-1" style={{ fontSize: '0.72rem' }}>
              {tech}
            </span>
          );
        });
        return (
          <div key={project.title} className="col-12 col-sm-6 col-lg-4 mb-4">
            <div className="card h-100 portfolio-card shadow-sm">
              <div className="portfolio-card-img-wrap">
                <img
                  src={projectImage}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="portfolio-overlay">
                  <a
                    href={project.url || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light btn-sm"
                  >
                    <i className="fa fa-external-link me-1"></i>View Project
                  </a>
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <span className="badge bg-primary mb-2" style={{ width: 'fit-content', fontSize: '0.72rem' }}>
                  {project.category}
                </span>
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted small flex-grow-1">{project.description}</p>
                <div className="mt-2">{techBadges}</div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm mt-3"
                  >
                    <i className="fa fa-github me-1"></i>GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      });

      if (this.props.data.aiProjects) {
        aiProjects = this.props.data.aiProjects.map(function (project) {
          var techBadges = (project.techStack || []).map(function (tech) {
            return (
              <span key={tech} className="badge bg-secondary me-1 mb-1" style={{ fontSize: '0.72rem' }}>
                {tech}
              </span>
            );
          });
          var featureList = (project.features || []).map(function (f) {
            return (
              <li key={f} className="small text-muted">
                <i className="fa fa-check-circle text-success me-1"></i>{f}
              </li>
            );
          });
          return (
            <div key={project.title} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div className="card h-100 portfolio-card ai-card shadow-sm">
                <div className="ai-card-header d-flex align-items-center p-3">
                  <div className="ai-icon me-3">
                    <i className="fa fa-robot" style={{ fontSize: '2rem', color: '#6610f2' }}></i>
                  </div>
                  <div>
                    <span className="badge bg-purple mb-1" style={{ background: '#6610f2', fontSize: '0.72rem' }}>
                      {project.category}
                    </span>
                    <h5 className="card-title mb-0 mt-1" style={{ fontSize: '1rem' }}>{project.title}</h5>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-muted small">{project.description}</p>
                  {featureList.length > 0 && (
                    <ul className="list-unstyled mt-2 mb-3">{featureList}</ul>
                  )}
                  <div className="mt-auto">
                    <div className="mb-2">{techBadges}</div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        <i className="fa fa-github me-1"></i>GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        });
      }
    }

    return (
      <section id="portfolio" className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-2">Projects</h2>
          <p className="text-center text-muted mb-5">A selection of engineering and data projects I've built.</p>

          <div className="row">
            {projects}
          </div>

          {aiProjects && (
            <>
              <div className="section-divider my-4">
                <h3 className="text-center mb-2" style={{ color: '#6610f2' }}>
                  <i className="fa fa-microchip me-2"></i>AI Projects
                </h3>
                <p className="text-center text-muted mb-4">
                  AI-powered developer tooling and engineering intelligence platforms.
                </p>
              </div>
              <div className="row">
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
