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
        <img src={user.image_url} alt={user.first_name} />
        <p>By: {user.username}</p>
        <p>Message: {message}</p>
        <button className="button" onClick={handleDelete} >Delete</button>
      </div>
    </>
  );
}
  
export default ReviewCard;