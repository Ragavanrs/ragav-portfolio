import React, { Component } from 'react';
import { FaReact, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const iconMap = {
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
};

class TechnicalExpertise extends Component {
  render() {
    var categories = null;
    if (this.props.data && this.props.data.categories) {
      categories = this.props.data.categories.map(function (cat) {
        var IconComponent = iconMap[cat.icon] || FaTools;
        var skills = cat.skills.map(function (skill) {
          return (
            <span key={skill} className="skill-tag">{skill}</span>
          );
        });
        return (
          <div key={cat.category} className="expertise-card">
            <div className="expertise-icon">
              <IconComponent size={28} />
            </div>
            <h3 className="expertise-category">{cat.category}</h3>
            <div className="skill-tags">
              {skills}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="expertise" className="section-expertise">
        <div className="row">
          <div className="twelve columns">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">
              Full-stack capabilities across the modern engineering toolchain.
            </p>
          </div>
        </div>
        <div className="expertise-grid">
          {categories}
        </div>
      </section>
    );
  }
}

export default TechnicalExpertise;
