import React, { Component } from 'react';
import { FaSearch, FaLightbulb, FaSitemap, FaTrophy } from 'react-icons/fa';

class CaseStudies extends Component {
  render() {
    var studies = null;
    if (this.props.data && this.props.data.studies) {
      studies = this.props.data.studies.map(function (study) {
        return (
          <div key={study.title} className="case-study-card">
            <h3 className="case-study-title">{study.title}</h3>
            <div className="case-study-grid">
              <div className="case-block case-problem">
                <div className="case-block-header">
                  <FaSearch size={18} />
                  <span>Problem</span>
                </div>
                <p>{study.problem}</p>
              </div>
              <div className="case-block case-solution">
                <div className="case-block-header">
                  <FaLightbulb size={18} />
                  <span>Solution</span>
                </div>
                <p>{study.solution}</p>
              </div>
              <div className="case-block case-architecture">
                <div className="case-block-header">
                  <FaSitemap size={18} />
                  <span>Architecture</span>
                </div>
                <p>{study.architecture}</p>
              </div>
              <div className="case-block case-impact">
                <div className="case-block-header">
                  <FaTrophy size={18} />
                  <span>Impact</span>
                </div>
                <p>{study.impact}</p>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="casestudies" className="section-casestudies">
        <div className="row">
          <div className="twelve columns">
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle">
              Engineering decisions, architectural thinking, and measurable outcomes.
            </p>
          </div>
        </div>
        <div className="case-studies-container">
          {studies}
        </div>
      </section>
    );
  }
}

export default CaseStudies;
