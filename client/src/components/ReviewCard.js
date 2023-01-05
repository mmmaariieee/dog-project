import React from 'react';
import {Link} from 'react-router-dom';

function ReviewCard({ review, onDeleteReview }) {
  const { message, id, user } = review
  console.log(user)

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
        <Link to={`/dogs/${id}`}></Link>
        <p>ID: {user.id}</p>
        <p>Message: {message}</p>
        <p>By: {user.username}</p>
        <button className="button" onClick={handleDelete} >Delete</button>
      </div>
    </>
  );
}
  
export default ReviewCard;