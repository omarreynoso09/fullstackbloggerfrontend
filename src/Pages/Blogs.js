import React from "react";

const BlogsPage = ({
  blogs,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  filterField,
  setFilterField,
  filterValue,
  setFilterValue,
  limit,
  setLimit,
  page,
  setPage,
}) => {
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
      <label>Sort Field</label>
      &nbsp;
      <select
        value={sortField}
        onChange={(event) => {
          const newSortField = event.target.value;
          setSortField(newSortField);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="createdAt">Created At</option>
        <option value="id">ID</option>
      </select>
      <br />
      <label>Sort Order</label>
      &nbsp;
      <select
        value={sortOrder}
        onChange={(event) => {
          const newSortOrder = event.target.value;
          setSortOrder(newSortOrder);
        }}
      >
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
      <br />
      <label>Filter Field</label>
      &nbsp;
      <select
        value={filterField}
        onChange={(event) => {
          const newFilterField = event.target.value;
          setFilterField(newFilterField);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <br />
      <label>Filter Value: </label>
      <input
        type="text"
        value={filterValue}
        onChange={(event) => {
          const newFilterValue = event.target.value;
          setFilterValue(newFilterValue);
        }}
      ></input>
      <label>Limit</label>
      <input
        type="number"
        min="1"
        value={limit}
        placeholder="What is your limit, Daddy?"
        onChange={(event) => {
          const newLimit = event.target.value;
          setLimit(newLimit);
        }}
      ></input>
      <label>Page</label>
      <input
        type="number"
        min="1"
        value={page}
        placeholder="Page"
        onChange={(event) => {
          const newPage = event.target.value;
          setPage(newPage);
        }}
      ></input>
      <div>
        {blogs.map((blog) => {
          return <BlogPost blog={blog} key={blog.id} />;
        })}
      </div>
    </div>
  );
};
const BlogPost = ({ blog }) => {
  return (
    <div className="blogPost">
      <h2>Title: {blog.title}</h2>
      <br />
      <h3>Author: {blog.author}</h3>
      <br />
      <h4>Category: {blog.category}</h4>
      <br />
      <div>{blog.text}</div>
      <br />
      <div>Created At: {blog.createdAt}</div>
      <br />
      <div>Last Modified: {blog.lastModified}</div>
    </div>
  );
};
export default BlogsPage;
