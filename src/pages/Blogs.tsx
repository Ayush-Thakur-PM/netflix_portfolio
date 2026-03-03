import React from 'react';
import './Blogs.css';
// When adding blog entries, use: import { FaMedium, FaDev } from 'react-icons/fa';

// Add your blog posts or articles here; leave empty to show placeholder
const blogs: Array<{
  title: string;
  platform: string;
  icon: JSX.Element;
  link: string;
  description: string;
}> = [];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
              <div className="blog-icon animated-icon">{blog.icon}</div>
              <div className="blog-info animated-text">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <span className="blog-platform">{blog.platform}</span>
              </div>
            </a>
          ))
        ) : (
          <p className="blogs-placeholder">Blog posts and articles—coming soon.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
