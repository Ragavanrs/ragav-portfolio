import React, { Component } from 'react';

class Resume extends Component {
  render() {
    let education = null;
    let work = null;
    let skillsContent = null;

    if (this.props.data) {
      education = this.props.data.education.map(function (edu) {
        return (
          <div key={edu.school} className="mb-4">
            <h4 className="mb-1">{edu.school}</h4>
            <p className="info mb-1">
              {edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em>
            </p>
            <p className="text-muted small">{edu.description}</p>
          </div>
        );
      });

      work = this.props.data.work.map(function (job) {
        return (
          <div key={job.company} className="work-item mb-4 p-3 rounded border-start border-primary border-3 bg-light">
            <h4 className="mb-1">{job.company}</h4>
            <p className="info mb-2">
              <strong>{job.title}</strong> <span>&bull;</span> <em className="date">{job.years}</em>
            </p>
            <p className="text-muted small mb-0">{job.description}</p>
          </div>
        );
      });

      if (this.props.data.skillGroups) {
        skillsContent = this.props.data.skillGroups.map(function (group) {
          var badges = group.skills.map(function (skill) {
            return (
              <span key={skill} className="badge bg-dark me-2 mb-2 py-2 px-3" style={{ fontSize: '0.8rem' }}>
                {skill}
              </span>
            );
          });
          return (
            <div key={group.category} className="mb-4">
              <h6 className="text-uppercase text-muted mb-2 fw-bold" style={{ letterSpacing: '0.08em' }}>
                {group.category}
              </h6>
              <div>{badges}</div>
            </div>
          );
        });
      } else {
        var skills = this.props.data.skills.map(function (skill) {
          var className = 'bar-expand ' + skill.name.toLowerCase();
          return (
            <li key={skill.name}>
              <span style={{ width: skill.level }} className={className}></span>
              <em>{skill.name}</em>
            </li>
          );
        });
        skillsContent = (
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        );
      }
    }

    return (
      <section id="resume" className="py-5 bg-white">
        <div className="container">

          <div className="row mb-5">
            <div className="col-12 col-md-3 mb-3">
              <h2 className="section-label">
                <span>Education</span>
              </h2>
            </div>
            <div className="col-12 col-md-9">
              {education}
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12 col-md-3 mb-3">
              <h2 className="section-label">
                <span>Experience</span>
              </h2>
            </div>
            <div className="col-12 col-md-9">
              {work}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 mb-3">
              <h2 className="section-label">
                <span>Skills</span>
              </h2>
            </div>
            <div className="col-12 col-md-9">
              {skillsContent}
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Resume;
