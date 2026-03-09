import React, { Component } from 'react';
import { FaLayerGroup } from 'react-icons/fa';

class ArchitectureProjects extends Component {
  render() {
    let projects = null;

    if (this.props.data && this.props.data.projects) {
      projects = this.props.data.projects.map(function (project) {
        const techTags = project.techStack.map(t => (
          <span key={t} className="pf-arch-tag">{t}</span>
        ));
        return (
          <div key={project.name} className="col-12 col-lg-4">
            <div className="pf-arch-card h-100">
              <div className="pf-arch-header">
                <div className="pf-arch-icon"><FaLayerGroup /></div>
                <div>
                  <div className="pf-arch-name">{project.name}</div>
                  <div className="pf-arch-arch">{project.architecture}</div>
                </div>
              </div>

              <div className="pf-arch-tags">{techTags}</div>

              <div className="pf-arch-details">
                <div className="pf-arch-detail">
                  <div className="pf-arch-detail-label pf-arch-challenge-label">Challenge</div>
                  <p>{project.challenges}</p>
                </div>
                <div className="pf-arch-detail">
                  <div className="pf-arch-detail-label pf-arch-outcome-label">Outcome</div>
                  <p>{project.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="architecture" className="pf-section pf-section-alt">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">Architecture & Systems</span>
            <h2 className="pf-section-title">Production-grade systems design</h2>
            <div className="pf-divider"></div>
            <p className="pf-section-desc">
              Systems I designed, architected, and delivered — with clear challenges and measurable outcomes.
            </p>
          </div>
          <div className="row g-4 reveal-stagger">
            {projects}
          </div>
        </div>
      </section>
    );
  }
}

export default ArchitectureProjects;
