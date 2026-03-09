import React, { Component } from 'react';
import { FaSearch, FaLightbulb, FaSitemap, FaTrophy } from 'react-icons/fa';

class CaseStudies extends Component {
  render() {
    let studies = null;

    if (this.props.data && this.props.data.studies) {
      studies = this.props.data.studies.map(study => (
        <div key={study.title} className="col-12">
          <div className="pf-case-card reveal">
            <div className="pf-case-title">{study.title}</div>
            <div className="pf-case-grid">
              <div className="pf-case-block pf-case-problem">
                <div className="pf-case-block-head">
                  <FaSearch size={13} /><span>Problem</span>
                </div>
                <p>{study.problem}</p>
              </div>
              <div className="pf-case-block pf-case-solution">
                <div className="pf-case-block-head">
                  <FaLightbulb size={13} /><span>Solution</span>
                </div>
                <p>{study.solution}</p>
              </div>
              <div className="pf-case-block pf-case-arch">
                <div className="pf-case-block-head">
                  <FaSitemap size={13} /><span>Architecture</span>
                </div>
                <p>{study.architecture}</p>
              </div>
              <div className="pf-case-block pf-case-impact">
                <div className="pf-case-block-head">
                  <FaTrophy size={13} /><span>Impact</span>
                </div>
                <p>{study.impact}</p>
              </div>
            </div>
          </div>
        </div>
      ));
    }

    return (
      <section id="casestudies" className="pf-section pf-section-alt">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">Case Studies</span>
            <h2 className="pf-section-title">Deep-dives into engineering decisions</h2>
            <div className="pf-divider"></div>
            <p className="pf-section-desc">
              How I approach complex problems — from root cause analysis to architectural solutions and measurable impact.
            </p>
          </div>
          <div className="row g-4">
            {studies}
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudies;
