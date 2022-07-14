import React from "react";

const BlogManagerCard = ({ blog, deleteBlog }) => {
  return (
    <div className="blogPost">
      <p>Id: {blog.id}</p>
      <h3>Title: {blog.title}</h3>
      <br />
      <h4>Author: {blog.author}</h4>
      <br />
      <h4>Category: {blog.category}</h4>
      <br />
      <h4>Created At: {blog.createdAt}</h4>
      <br />
      <h4>Last Modified: {blog.lastModified}</h4>
      <br />
      <button
        onClick={async () => {
          await deleteBlog(blog.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogManagerCard;
