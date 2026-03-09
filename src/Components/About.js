import React, { Component } from 'react';

class About extends Component {
  render() {
    let name = '', profilepic = '', bio = '', street = '', city = '', state = '', zip = '', phone = '', email = '', resumeDownload = '#';

    if (this.props.data) {
      name          = this.props.data.name;
      profilepic    = 'images/' + this.props.data.image;
      bio           = this.props.data.bio;
      street        = this.props.data.address.street;
      city          = this.props.data.address.city;
      state         = this.props.data.address.state;
      zip           = this.props.data.address.zip;
      phone         = this.props.data.phone;
      email         = this.props.data.email;
      resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about" className="pf-section pf-section-alt">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">About Me</span>
            <h2 className="pf-section-title">The engineer behind the work</h2>
            <div className="pf-divider"></div>
          </div>

          <div className="row align-items-start g-5 reveal">
            {/* Photo column */}
            <div className="col-12 col-md-4 text-center text-md-start">
              <div className="pf-about-photo-wrap mx-auto mx-md-0">
                <img src={profilepic} alt={name} className="pf-about-photo" />
                <div className="pf-about-photo-badge">
                  <div className="pf-about-photo-badge-num">5+</div>
                  <div className="pf-about-photo-badge-label">Years Exp.</div>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="col-12 col-md-8">
              <p className="pf-about-bio">{bio}</p>

              <div className="pf-contact-info mb-4">
                <div className="pf-contact-row">
                  <div className="pf-contact-icon"><i className="fa fa-user"></i></div>
                  <div>
                    <div className="pf-contact-label">Name</div>
                    <div className="pf-contact-value">{name}</div>
                  </div>
                </div>
                <div className="pf-contact-row">
                  <div className="pf-contact-icon"><i className="fa fa-map-marker"></i></div>
                  <div>
                    <div className="pf-contact-label">Location</div>
                    <div className="pf-contact-value">{city}, {state}</div>
                  </div>
                </div>
                <div className="pf-contact-row">
                  <div className="pf-contact-icon"><i className="fa fa-phone"></i></div>
                  <div>
                    <div className="pf-contact-label">Phone</div>
                    <div className="pf-contact-value">{phone}</div>
                  </div>
                </div>
                <div className="pf-contact-row">
                  <div className="pf-contact-icon"><i className="fa fa-envelope"></i></div>
                  <div>
                    <div className="pf-contact-label">Email</div>
                    <div className="pf-contact-value">{email}</div>
                  </div>
                </div>
              </div>

              <a href={resumeDownload} className="btn-pf-primary" download>
                <i className="fa fa-download"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
