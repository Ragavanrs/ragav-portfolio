import React, { Component } from 'react';
import { FaRocket, FaChartLine, FaShieldAlt, FaLayerGroup, FaCode, FaUsers } from 'react-icons/fa';

const iconMap = {
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaLayerGroup,
  FaCode,
  FaUsers,
};

class EngineeringImpact extends Component {
  render() {
    var achievementCards = null;
    if (this.props.data && this.props.data.achievements) {
      achievementCards = this.props.data.achievements.map(function (item) {
        var IconComponent = iconMap[item.icon] || FaCode;
        return (
          <div key={item.title} className="impact-card">
            <div className="impact-icon">
              <IconComponent size={32} />
            </div>
            <div className="impact-metric">{item.metric}</div>
            <h3 className="impact-title">{item.title}</h3>
            <p className="impact-description">{item.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="impact" className="section-impact">
        <div className="row">
          <div className="twelve columns">
            <h2 className="section-title">Engineering Impact</h2>
            <p className="section-subtitle">
              Real-world achievements from production systems at scale.
            </p>
          </div>
        </div>
        <div className="impact-grid">
          {achievementCards}
        </div>
      </section>
    );
  }
}

export default EngineeringImpact;
