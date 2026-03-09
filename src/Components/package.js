import React, { Component } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

class Package extends Component {
  render() {
    let packages = null;

    if (this.props.data && this.props.data.package) {
      packages = this.props.data.package.map(pkg => (
        <div key={pkg.title} className="col-12 col-md-6 col-lg-4">
          <div className="pf-npm-card">
            <div className="pf-npm-icon">npm</div>
            <div className="pf-npm-title">{pkg.title}</div>
            <p className="pf-npm-desc">{pkg.description}</p>
            <a href={pkg.link} className="pf-npm-link" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={12} /> View on npm
            </a>
          </div>
        </div>
      ));
    }

    return (
      <section id="npm" className="pf-section pf-section-alt">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label" style={{ background: 'rgba(20,184,166,0.12)', color: '#2dd4bf', borderColor: 'rgba(20,184,166,0.3)' }}>
              Open Source
            </span>
            <h2 className="pf-section-title">NPM Packages</h2>
            <div className="pf-divider" style={{ background: 'linear-gradient(90deg, #14b8a6, #0ea5e9)' }}></div>
            <p className="pf-section-desc">
              Open-source packages published to NPM — addressing real-world React and React Native developer needs.
            </p>
          </div>
          <div className="row g-4 reveal-stagger">
            {packages}
          </div>
        </div>
      </section>
    );
  }
}

export default Package;
