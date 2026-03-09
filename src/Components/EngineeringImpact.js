import React, { Component } from 'react';
import { FaRocket, FaChartLine, FaShieldAlt, FaLayerGroup, FaCode, FaUsers } from 'react-icons/fa';

const iconMap = { FaRocket, FaChartLine, FaShieldAlt, FaLayerGroup, FaCode, FaUsers };

class EngineeringImpact extends Component {
  render() {
    let cards = null;

    if (this.props.data && this.props.data.achievements) {
      cards = this.props.data.achievements.map(function (item) {
        const IconComp = iconMap[item.icon] || FaCode;
        return (
          <div key={item.title} className="col-12 col-sm-6 col-lg-4">
            <div className="pf-impact-card h-100">
              <div className="pf-impact-icon">
                <IconComp />
              </div>
              <div className="pf-impact-metric">{item.metric}</div>
              <div className="pf-impact-title">{item.title}</div>
              <p className="pf-impact-desc">{item.description}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="impact" className="pf-section pf-section-alt">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">Engineering Impact</span>
            <h2 className="pf-section-title">Real-world achievements at scale</h2>
            <div className="pf-divider"></div>
            <p className="pf-section-desc">
              Measurable outcomes from production systems — migrations, optimizations, and enterprise deliveries.
            </p>
          </div>
          <div className="row g-4 reveal-stagger">
            {cards}
          </div>
        </div>
      </section>
    );
  }
}

export default EngineeringImpact;
