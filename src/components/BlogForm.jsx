import React from "react";
import { useState } from "react";
import axios from "axios";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      title: title,
      body: body,
    });
  };
  return (
    <div>
      <h1 style={{ margin: "15px 0 15px 0" }}>Create your blog post!</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          value={body}
          rows="20"
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Post
      </button>
    </div>
  );
}

export default BlogForm;
