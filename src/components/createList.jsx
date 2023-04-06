// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api/api";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleAddingList = (e) => {
    e.preventDefault();

    if (title === "") {
      alert("Enter your Book title");
    } else if (author === "") {
      alert("Enter your Author name");
    } else {
      // const BookDetails = { title, author };
      // fetch("http://localhost:8000/posts/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(BookDetails),
      // })

      api.post(`/posts/`, { title: title, author: author })
      .then(() => {
        navigate("/");
      });
    }
  };

  return (
    <div className="header row justify-content-center py-5">
      <div className="col-12">
        <h2 className="text-center mb-4">Add your Book and Author name </h2>
      </div>
      <div className="col-10">
        <form onSubmit={handleAddingList}>
          <label>Book title</label>
          <input
            type="text"
            placeholder="Enter Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value.trimStart())}
          />
          <label>Author name</label>
          <input
            type="text"
            placeholder="Enter Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value.trimStart())}
          />
          <button type="submit" className="btn btn-outline-dark">
            Add List
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateList;
