import React from 'react';
import {Link} from 'react-router-dom';

function ReviewCard({review}) {
    const {message, id} = review

    return (
      <>
        <div className="content">
          <Link to={`/books/${id}`}></Link>
            <p>ID: {id}</p>
            <p>Message: {message}</p>
        </div>
     </>
    );
  }
  
  export default ReviewCard;