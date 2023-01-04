import React from 'react';
import {Link} from 'react-router-dom';

function ReviewCard({ review, onDeleteReview }) {
  const { message, id } = review

  function handleDelete() {
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(review);
      }
    })
  }

  return (
    <>
      <div className="content">
        <Link to={`/books/${id}`}></Link>
        <p>ID: {id}</p>
        <p>Message: {message}</p>
        <button className="button" onClick={handleDelete} >Delete</button>
      </div>
    </>
  );
}
  
export default ReviewCard;