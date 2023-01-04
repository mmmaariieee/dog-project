import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function DogCard({dog}) {
  const { id, image_url, name, about, gender, coat_length, size, coat_color, date_of_birth, price, location} = dog
  const navigate = useNavigate()

  console.log(name)

    return (
      <>
      <div className="dog">
        <Link className="item-link" to={`/books/${id}`}> <h2>{name}</h2></Link>
          <p className="book-detail">About: {about}</p>
          <p className="book-detail">Gender: <i>{gender}</i></p>
          <button className="button"><Link id="edit-button" to={`/books/${id}/edit`}>Edit</Link></button>
          <button className="button">Delete</button>
      </div>
    </>
  );
}

export default DogCard;