import React from "react";

function BlogCard({ blog, onClick }) {
  return (
    <div
      onClick={onClick}
      className="blog-card"
      style={{ background: blog.color }}
    >
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
    </div>
  );
}

export default BlogCard;
