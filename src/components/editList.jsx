import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "./api/api";

const EditList = () => {
  const [id, IdChange] = useState("");
  const [title, TitleChange] = useState("");
  const [author, AuthorChange] = useState("");
  const navigate = useNavigate();
  const { listid } = useParams();

  useEffect(() => {
    api.get(`/posts/${listid}`)
      .then((resp) => {
        IdChange(resp.data.id);
        TitleChange(resp.data.title);
        AuthorChange(resp.data.author);
      });
  }, [listid]);

  const handleEditingList = (e) => {
    e.preventDefault();

    // const BookDetails = { id, title, author };

    // fetch(`http://localhost:8000/posts/${listid}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(BookDetails),
    // })

    api.put(`/posts/${listid}`,{id:id,title:title,author:author})
    .then(() => {
      navigate('/')
    });
  };

  return (
    <div className="header row justify-content-center py-5">
      <div className="col-12">
        <h2 className="text-center mb-4">Edit Book and Author  </h2>
      </div>
      <div className="col-10">
        <form onSubmit={handleEditingList}>
          <label>ID</label>
          <input type="text" disabled readOnly value={listid} />
          <label>Book title</label>
          <input
            type="text"
            placeholder="Enter Book title"
            value={title}
            onChange={(e) => TitleChange(e.target.value.trimStart())}
          />
          <label>Author name</label>
          <input
            type="text"
            placeholder="Enter Author name"
            value={author}
            onChange={(e) => AuthorChange(e.target.value.trimStart())}
          />
          <button type="submit" className="btn btn-outline-dark">
            Edited 
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditList;
