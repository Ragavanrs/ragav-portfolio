import React, { Component } from 'react';
import { FaReact, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const iconMap = { FaReact, FaServer, FaDatabase, FaCloud, FaTools };

class TechnicalExpertise extends Component {
  render() {
    let categories = null;

    if (this.props.data && this.props.data.categories) {
      categories = this.props.data.categories.map(function (cat) {
        const IconComp = iconMap[cat.icon] || FaTools;
        const skills = cat.skills.map(s => (
          <span key={s} className="pf-skill-tag">{s}</span>
        ));
        return (
          <div key={cat.category} className="col-12 col-sm-6 col-lg-4">
            <div className="pf-expertise-card h-100">
              <div className="pf-expertise-icon">
                <IconComp />
              </div>
              <div className="pf-expertise-cat">{cat.category}</div>
              <div className="pf-skill-tags">{skills}</div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="expertise" className="pf-section">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">Technical Expertise</span>
            <h2 className="pf-section-title">Full-stack engineering toolchain</h2>
            <div className="pf-divider"></div>
            <p className="pf-section-desc">
              Core technologies I use daily across frontend, backend, databases, cloud, and DevOps.
            </p>
          </div>
          <div className="row g-4 reveal-stagger">
            {categories}
          </div>
        </div>
      </section>
    );
  }
}

export default TechnicalExpertise;
