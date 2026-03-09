import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false, navOpen: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ scrolled: window.scrollY > 60 });
  }

  toggleNav() {
    this.setState(prev => ({ navOpen: !prev.navOpen }));
  }

  render() {
    const { scrolled, navOpen } = this.state;
    let name = '', occupation = '', description = '', resumeDownload = '#', networks = null;

    if (this.props.data) {
      name         = this.props.data.name;
      occupation   = this.props.data.occupation;
      description  = this.props.data.description;
      resumeDownload = this.props.data.resumedownload;
      networks     = this.props.data.social.map(function (network) {
        return (
          <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer"
            className="pf-social-link" title={network.name}>
            <i className={network.className}></i>
          </a>
        );
      });
    }

    const firstName = name ? name.split(' ')[0] : 'NR';
    const initials  = name ? name.split(' ').map(n => n[0]).join('').slice(0,2) : 'NR';

    const navLinks = [
      { href: '#impact',        label: 'Impact'      },
      { href: '#expertise',     label: 'Skills'      },
      { href: '#about',         label: 'About'       },
      { href: '#resume',        label: 'Experience'  },
      { href: '#portfolio',     label: 'Projects'    },
      { href: '#architecture',  label: 'Systems'     },
      { href: '#blog',          label: 'Writing'     },
    ];

    return (
      <>
        {/* ── Sticky Navbar ── */}
        <nav className={`pf-navbar${scrolled ? ' scrolled' : ''}`}>
          <div className="pf-navbar-inner">
            {/* Brand */}
            <a href="#home" className="pf-brand" style={{ textDecoration: 'none' }}>
              {firstName}<span>.</span>
            </a>

            {/* Desktop nav links */}
            <div className="pf-nav-links">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="pf-nav-link">
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="pf-nav-cta ms-2">Hire Me</a>
            </div>

            {/* Mobile hamburger */}
            <button className="pf-nav-toggle" onClick={this.toggleNav} aria-label="Toggle navigation">
              <i className={`fa ${navOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </nav>

        {/* ── Mobile Nav Drawer ── */}
        <div className={`pf-nav-mobile${navOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="pf-nav-link"
              onClick={() => this.setState({ navOpen: false })}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="pf-nav-cta mt-2 text-center"
            onClick={() => this.setState({ navOpen: false })}>
            Hire Me
          </a>
        </div>

        {/* ── Hero Section ── */}
        <section id="home" className="pf-hero">
          <div className="pf-hero-content">
            {/* Availability badge */}
            <div className="pf-hero-badge">
              <span className="pf-hero-badge-dot"></span>
              Available for senior roles &amp; tech-lead positions
            </div>

            {/* Name */}
            <h1 className="pf-hero-name">
              {name || 'Nirmal Ragavan'}
            </h1>

            {/* Title */}
            <p className="pf-hero-title">{occupation || 'Senior Software Engineer'}</p>

            {/* Description */}
            <p className="pf-hero-desc">{description}</p>

            {/* CTA buttons */}
            <div className="pf-hero-actions">
              <a href="#portfolio" className="btn-pf-primary">
                <i className="fa fa-folder-open"></i> View Projects
              </a>
              <a href={resumeDownload} className="btn-pf-secondary" download>
                <i className="fa fa-download"></i> Download CV
              </a>
              <a href="#contact" className="btn-pf-ghost">
                <i className="fa fa-envelope"></i> Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="pf-hero-social">
              {networks}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pf-hero-scroll">
            <div className="pf-hero-scroll-line"></div>
            <span>Scroll</span>
          </div>
        </section>
      </>
    );
  }
}

export default Header;
