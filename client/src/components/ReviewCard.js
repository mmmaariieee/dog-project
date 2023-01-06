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
      <div className="card filters justify">
        {/* <Link to={`/dogs/${id}`}></Link> */}
        <div className='filters'>
          <img className="small-img" src={user.image_url} alt={user.first_name} />
          <div className='padding-left'>
            <h3>{user.username}</h3>
            <p>{message}</p>
          </div>
        </div>
        <button className="button" onClick={handleDelete} >Delete</button>
      </div>
    </>
  );
}
  
export default ReviewCard;