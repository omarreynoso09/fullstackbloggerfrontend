import React from "react";
import { useState } from "react";
import BlogManagerCard from "../components/BlogManagerCard";
import Modal from "../components/Modal";

const BlogManager = ({
  adminBlogList,
  deleteBlog,
  fetchSingleBlog,
  urlEndpoint,
  setAdminBlogsLoading,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editText, setEditText] = useState("");
  const [editBlogId, setEditBlogId] = useState(null);
  const [editCategory, setEditCategory] = useState("");

  const putUpdatedBlog = async () => {
    setAdminBlogsLoading(true);
    const url = `${urlEndpoint}/admin/edit-blog`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editBlogId,
        title: editTitle,
        author: editAuthor,
        text: editText,
        category: editCategory,
      }),
    });
    const responseJSON = await response.json();
    setAdminBlogsLoading(false);

    return responseJSON;
  };

  return (
    <div>
      <h1>Blog Manager</h1>
      <Modal
        title={editTitle}
        onClose={() => setShowModal(false)}
        show={showModal}
        putUpdatedBlog={putUpdatedBlog}
      >
        <label>Title</label>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
        />
        <br></br>

        <label>Author</label>
        <input
          type="text"
          value={editAuthor}
          onChange={(e) => {
            setEditAuthor(e.target.value);
          }}
        ></input>
        <br></br>

        <label>Category</label>
        <input
          type="text"
          value={editCategory}
          onChange={(e) => {
            setEditCategory(e.target.value);
          }}
        ></input>
        <br></br>

        <label>Text</label>
        <textarea
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        ></textarea>
      </Modal>

      {adminBlogList.map((blog) => {
        const fetchBlogAndShow = async () => {
          const blogPost = await fetchSingleBlog(blog.id);
          setEditTitle(blogPost.title);
          setEditAuthor(blogPost.author);
          setEditText(blogPost.text);
          setEditBlogId(blogPost.id);
          setEditCategory(blogPost.category);
          setShowModal(true);
        };
        return (
          <BlogManagerCard
            blog={blog}
            deleteBlog={deleteBlog}
            fetchBlogAndShow={fetchBlogAndShow}
            key={blog.id}
          />
        );
      })}
    </div>
  );
};

export default BlogManager;
