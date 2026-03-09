import React, { Component } from 'react';
import { FaArrowRight, FaPen } from 'react-icons/fa';

class Blog extends Component {
  render() {
    let posts = null;

    if (this.props.data && this.props.data.posts) {
      posts = this.props.data.posts.map(post => (
        <div key={post.title} className="col-12 col-md-6 col-lg-4">
          <div className="pf-blog-card">
            <div className="pf-blog-icon"><FaPen /></div>
            <div className="pf-blog-title">{post.title}</div>
            <p className="pf-blog-desc">{post.description}</p>
            <a href={post.link} className="pf-blog-link" target="_blank" rel="noopener noreferrer">
              Read More <FaArrowRight size={13} />
            </a>
          </div>
        </div>
      ));
    }

    return (
      <section id="blog" className="pf-section">
        <div className="pf-container">
          <div className="pf-section-header reveal">
            <span className="pf-section-label">Writing & Insights</span>
            <h2 className="pf-section-title">Technical articles &amp; lessons</h2>
            <div className="pf-divider"></div>
            <p className="pf-section-desc">
              Engineering decisions, architecture deep-dives, and lessons learned from production systems.
            </p>
          </div>
          <div className="row g-4 reveal-stagger">
            {posts}
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
