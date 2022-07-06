import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BlogsPage from "./Pages/Blogs";
import { useState, useEffect } from "react";

const urlEndpoint = "http://localhost:4000";

function App() {
  const [serverJSON, setServerJSON] = useState({ message: null });

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/blogs/hello-blogs`);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/blogs"
          element={<BlogsPage message={serverJSON.message} />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
