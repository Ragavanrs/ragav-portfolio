import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    let testimonials = null;

    if (this.props.data && this.props.data.testimonials) {
      testimonials = this.props.data.testimonials.map(t => {
        const initial = t.user ? t.user.charAt(0).toUpperCase() : '?';
        return (
          <div key={t.user} className="col-12 col-md-6">
            <div className="pf-testimonial-card">
              <p className="pf-testimonial-text">"{t.text}"</p>
              <div className="pf-testimonial-author">
                <div className="pf-testimonial-avatar">{initial}</div>
                <div className="pf-testimonial-name">{t.user}</div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="testimonials" className="pf-section">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">Testimonials</span>
            <h2 className="pf-section-title">What clients say</h2>
            <div className="pf-divider"></div>
            <p className="pf-section-desc">
              Feedback from clients and collaborators across Fiverr, Upwork, and long-term projects.
            </p>
          </div>
          <div className="row g-4 reveal-stagger">
            {testimonials}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
