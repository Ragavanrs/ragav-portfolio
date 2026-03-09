import React, { Component } from 'react';

class Resume extends Component {
  render() {
    let education = null;
    let work      = null;
    let skills    = null;

    if (this.props.data) {
      education = this.props.data.education.map(edu => (
        <div key={edu.school} className="pf-edu-card">
          <div className="pf-edu-school">{edu.school}</div>
          <div className="pf-edu-degree">{edu.degree}</div>
          <div className="pf-edu-date">{edu.graduated}</div>
          {edu.description && (
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '8px', marginBottom: 0 }}>
              {edu.description}
            </p>
          )}
        </div>
      ));

      work = this.props.data.work.map(job => (
        <div key={job.company} className="pf-timeline-item">
          <div className="pf-timeline-dot"></div>
          <div className="pf-timeline-card">
            <div className="pf-exp-company">{job.company}</div>
            <div className="pf-exp-meta">
              <span className="pf-exp-title">{job.title}</span>
              <span className="pf-exp-divider">•</span>
              <span className="pf-exp-date">{job.years}</span>
            </div>
            <p className="pf-exp-desc">{job.description}</p>
          </div>
        </div>
      ));

      if (this.props.data.skillGroups) {
        skills = this.props.data.skillGroups.map(group => (
          <div key={group.category} className="pf-skills-group">
            <div className="pf-skills-cat">{group.category}</div>
            <div className="pf-skill-badges">
              {group.skills.map(s => (
                <span key={s} className="pf-skill-badge">{s}</span>
              ))}
            </div>
          </div>
        ));
      } else if (this.props.data.skills) {
        skills = (
          <div className="pf-skill-badges">
            {this.props.data.skills.map(s => (
              <span key={s.name} className="pf-skill-badge">{s.name}</span>
            ))}
          </div>
        );
      }
    }

    return (
      <section id="resume" className="pf-section pf-resume-section">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">Resume</span>
            <h2 className="pf-section-title">Education, Experience &amp; Skills</h2>
            <div className="pf-divider"></div>
            <p className="pf-section-desc">
              5+ years building production systems across enterprise Java, cloud microservices, and modern frontend stacks.
            </p>
          </div>

          <div className="row g-5 reveal">
            {/* Left column: Education + Skills */}
            <div className="col-12 col-lg-4">
              <div className="pf-resume-label">Education</div>
              {education}

              <div className="pf-resume-label mt-4">Skills</div>
              {skills}
            </div>

            {/* Right column: Experience timeline */}
            <div className="col-12 col-lg-8">
              <div className="pf-resume-label">Work Experience</div>
              <div className="pf-timeline">
                {work}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
