import React, { Component } from 'react';
import { FaArrowRight, FaPen } from 'react-icons/fa';

class Blog extends Component {
  render() {
    var posts = null;
    if (this.props.data && this.props.data.posts) {
      posts = this.props.data.posts.map(function (post) {
        return (
          <div key={post.title} className="blog-card">
            <div className="blog-icon">
              <FaPen size={20} />
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-description">{post.description}</p>
            <a href={post.link} className="blog-link" target="_blank" rel="noopener noreferrer">
              Read More <FaArrowRight size={14} />
            </a>
          </div>
        );
      });
    }

    return (
      <section id="blog" className="section-blog">
        <div className="row">
          <div className="twelve columns">
            <h2 className="section-title">Writing &amp; Insights</h2>
            <p className="section-subtitle">
              Technical articles, engineering decisions, and lessons from production.
            </p>
          </div>
        </div>
        <div className="blog-grid">
          {posts}
        </div>
      </section>
    );
  }
}

export default Blog;
