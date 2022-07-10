import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const PostBlogPage = ({ blogSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Submit New Blog</h1>
      {/* text input */}
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          const newTitle = event.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <br></br>
      <br></br>

      {/* text input */}
      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(event) => {
          const newAuthor = event.target.value;
          setAuthor(newAuthor);
        }}
      ></input>
      <br></br>
      <br></br>

      {/* text input */}
      <label>Category:</label>
      <input
        type="text"
        value={category}
        onChange={(event) => {
          const newCategory = event.target.value;
          setCategory(newCategory);
        }}
      ></input>
      <br></br>
      <br></br>

      {/* textarea input */}
      <label>Text:</label>
      <textarea
        type="text"
        value={text}
        onChange={(event) => {
          const newText = event.target.value;
          setText(newText);
        }}
      ></textarea>
      <br></br>

      <button
        id="submit"
        type="submit"
        onClick={
          ("click",
          () => {
            blogSubmit({
              title: title,
              author: author,
              category: category,
              text: text,
            });

            navigate("/");
          })
        }
      >
        Submit
      </button>
    </div>
  );
};

export default PostBlogPage;
