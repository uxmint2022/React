import React from "react";
import '../App.css'


const SingleTodo = ({ books,handleDelete,handleEdit }) => {
  return books.length > 0 ? (
    <table className="table table-dark rounded">
      <thead>
        <tr>
          <th scope="col">ID </th>
          <th scope="col">Book title</th>
          <th scope="col">Author</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      {books.map((book, index) => {
        const {id,title,author} = book
        return (
          <tbody key={id}>
            <tr className="align-items-center">
              <td>{index + 1}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>handleEdit(id)}>
                  <i className="bi bi-pencil-square "></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleDelete(id)}>
                  <i className="bi bi-trash3-fill "></i>
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  ) : (
    <div className="empty_data">No Data Found</div>
  );
};

export default SingleTodo;
