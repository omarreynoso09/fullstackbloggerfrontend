import "./App.css";
import { Routes, Route } from "react-router-dom";
import BlogsPage from "./Pages/Blogs";
import { useState, useEffect } from "react";
import PostBlogPage from "./Pages/PostBlogPage";
const urlEndpoint = "http://localhost:4000";

//list of variables to sort and filter the blog data
//do not use empty () instead add "" strings
// for limit and page dont forget the Numberconstructor

function App() {
  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [filterField, setFilterField] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const blogSubmit = async (blog) => {
    const url = `${urlEndpoint}/blogs/blog-submit`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    const responseJSON = await response.json();
    return responseJSON;
  };

  // code to copy and add in
  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      console.log("url", url);
      return;
    };
    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page]);

  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <BlogsPage
              blogs={serverJSON.message}
              sortField={sortField}
              setSortField={setSortField}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              filterField={filterField}
              setFilterField={setFilterField}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              limit={limit}
              setLimit={setLimit}
              page={page}
              setPage={setPage}
            />
          }
        ></Route>
        <Route
          path="/post-blog"
          element={
            <PostBlogPage
              message={serverJSON.message}
              blogSubmit={blogSubmit}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
