import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let networks = null;
    let name     = 'Nirmal Ragavan';

    if (this.props.data) {
      name     = this.props.data.name;
      networks = this.props.data.social.map(network => (
        <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer"
          title={network.name}>
          <i className={network.className}></i>
        </a>
      ));
    }

    const firstName = name ? name.split(' ')[0] : 'NR';

    return (
      <footer className="pf-footer">
        <div className="pf-footer-inner">
          <div className="pf-footer-brand">
            {firstName}<span>.</span>
          </div>

          <div className="pf-footer-copy">
            Built with React &amp; Bootstrap 5 — Thank you for visiting ♥
          </div>

          <div className="pf-footer-social">
            {networks}
          </div>
        </div>

        {/* Back to top */}
        <a href="#home" className="pf-back-top" title="Back to Top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </footer>
    );
  }
}

export default Footer;
