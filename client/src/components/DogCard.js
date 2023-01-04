import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function DogCard({dog, dogs, setDogs}) {
  const { id, image_url, name, about, gender, coat_length, size, coat_color, date_of_birth, price, location} = dog
  const navigate = useNavigate()

    function handleDelete(e) {
        fetch(`/dogs/${id}`, {
            method: 'DELETE',
        })
        navigate('/')
        window.location.reload(false);
    }
    
    console.log(name)

    return (
      <>
      <div className="dog">
        <Link className="item-link" to={`/books/${id}`}> <h2>{name}</h2></Link>
          <p className="book-detail">About: {about}</p>
          <p className="book-detail">Gender: <i>{gender}</i></p>
          <button className="button"><Link id="edit-button" to={`/books/${id}/edit`}>Edit</Link></button>
          <button className="button" onClick={handleDelete} >Delete</button>
      </div>
    </>
  );
}

export default DogCard;