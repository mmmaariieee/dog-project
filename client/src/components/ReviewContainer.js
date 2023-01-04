import React from "react";
import ReviewCard from './ReviewCard';

function ReviewContainer({ reviews, onDeleteReview }) {

    console.log(reviews);

    return (
     <div className="content">
        <div>
          {reviews.map(review => <ReviewCard key={review.id} review={review} onDeleteReview={onDeleteReview} />)}
        </div>
     </div>
    );
  }
  
export default ReviewContainer;
