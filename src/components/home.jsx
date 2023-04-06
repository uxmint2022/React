import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SingleTodo from "./singleTodo";
import api from "./api/api";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [error,setError]=useState()
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/posts/`)
    .then((resp) => setBooks(resp.data))
    .catch((err)=>{
      setError(err.message)
      console.log(err);
    })
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to remove this ?")) {

      // fetch(`http://localhost:8000/posts/${id}`, {
      //   method: "DELETE",

      api.delete(`/posts/${id}`)
      .then(() => {
        window.location.reload();
      });
    }
  };

  const handleEdit = (id) => {
    navigate(`/post/edit_page/${id}`);
  };

  
  return (
    <>
    {error ? <div className="error">{error}</div> :
    <div className="container">
      <h1 className="heading">Books Listing </h1>
      <h4 className="addingList ">
        <span className="me-3">Add Your Book and Author List</span>
        <Link to={`/post/create_page`  }>  
        <button className="btn btn-success fw-bold" >
          Add List
        </button>
        </Link>
      </h4>
      {books && (
        <SingleTodo
          books={books}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
    </div>
    }
    </>
  );
};

export default Home;
