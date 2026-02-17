import React, { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import "./App.css";


function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Blog UI</h1>

      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} goBack={() => setSelectedBlog(null)} />
      ) : (
        <BlogList onSelectBlog={setSelectedBlog} />
      )}
    </div>
  );
}

export default App;
