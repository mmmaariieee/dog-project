import React from "react";
import ReviewCard from './ReviewCard';

function ReviewContainer({reviews}) {

    console.log(reviews);

    return (
     <div className="content">
        <div>
            {reviews.map(review => <ReviewCard key={review.id} review={review}  />)}
        </div>
     </div>
    );
  }
  
export default ReviewContainer;
