import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BlogsPage from "./Pages/Blogs";
import { useState, useEffect } from "react";
const urlEndpoint = "http://localhost:4000";

function App() {
  //list of variables to sort and filter the blog data
  //do not use empty () instead add "" strings
  // for limit and page dont forget the Numberconstructor

  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [filterField, setFilterField] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(Number());
  const [page, setPage] = useState(Number(1));

  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/blogs"
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
      </Routes>
    </div>
  );
}

export default App;
