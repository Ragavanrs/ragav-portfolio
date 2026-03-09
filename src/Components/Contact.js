import React, { useState } from 'react';

const Contact = ({ data }) => {
  const [name,    setName]    = useState('');
  const [subject, setSubject] = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');
  const [sent,    setSent]    = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:ragavan.rs12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(name + ': ' + message)}`
    );
    setName(''); setSubject(''); setEmail(''); setMessage('');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="pf-section pf-section-alt">
      <div className="pf-container">
        <div className="pf-section-header reveal">
          <span className="pf-section-label">Get In Touch</span>
          <h2 className="pf-section-title">Let's build something great</h2>
          <div className="pf-divider"></div>
          <p className="pf-section-desc">
            {data?.contactmessage || 'Open to senior engineering roles, tech-lead positions, and interesting projects.'}
          </p>
        </div>

        <div className="row g-4 reveal">
          {/* Contact Form */}
          <div className="col-12 col-lg-7">
            <div className="pf-contact-form-wrap">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <div className="pf-form-group">
                      <label className="pf-form-label">Name *</label>
                      <input type="text" className="pf-form-control" value={name}
                        onChange={e => setName(e.target.value)} placeholder="Your name" required />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="pf-form-group">
                      <label className="pf-form-label">Email *</label>
                      <input type="email" className="pf-form-control" value={email}
                        onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required />
                    </div>
                  </div>
                </div>
                <div className="pf-form-group">
                  <label className="pf-form-label">Subject</label>
                  <input type="text" className="pf-form-control" value={subject}
                    onChange={e => setSubject(e.target.value)} placeholder="What's this about?" />
                </div>
                <div className="pf-form-group">
                  <label className="pf-form-label">Message *</label>
                  <textarea className="pf-form-control" value={message} rows={6}
                    onChange={e => setMessage(e.target.value)} placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="pf-form-submit">
                  {sent ? '✓ Message sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-5">
            <div className="pf-contact-sidebar">
              <div className="pf-contact-sidebar-title">Contact Information</div>

              <div className="pf-contact-item">
                <div className="pf-contact-item-icon"><i className="fa fa-user"></i></div>
                <div>
                  <div className="pf-contact-item-label">Name</div>
                  <div className="pf-contact-item-value">{data?.name}</div>
                </div>
              </div>

              <div className="pf-contact-item">
                <div className="pf-contact-item-icon"><i className="fa fa-envelope"></i></div>
                <div>
                  <div className="pf-contact-item-label">Email</div>
                  <div className="pf-contact-item-value">{data?.email}</div>
                </div>
              </div>

              <div className="pf-contact-item">
                <div className="pf-contact-item-icon"><i className="fa fa-phone"></i></div>
                <div>
                  <div className="pf-contact-item-label">Phone</div>
                  <div className="pf-contact-item-value">{data?.phone}</div>
                </div>
              </div>

              <div className="pf-contact-item">
                <div className="pf-contact-item-icon"><i className="fa fa-map-marker"></i></div>
                <div>
                  <div className="pf-contact-item-label">Location</div>
                  <div className="pf-contact-item-value">
                    {data?.address?.city}, {data?.address?.state}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="pf-contact-item-label mb-3">Availability</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Senior Engineer', 'Tech Lead', 'Freelance'].map(role => (
                    <span key={role} style={{
                      display: 'inline-block',
                      background: 'rgba(99,102,241,0.1)',
                      color: '#818cf8',
                      border: '1px solid rgba(99,102,241,0.25)',
                      borderRadius: '6px',
                      padding: '4px 12px',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}>{role}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
