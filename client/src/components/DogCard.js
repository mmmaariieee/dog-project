import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function DogCard({ dog, onDeleteDog }) {
  const { id, image_url, name, about, gender, coat_length, size, coat_color, date_of_birth, price, location, likes, reviews } = dog
  const navigate = useNavigate()

    function handleDelete() {
        fetch(`/dogs/${id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
                onDeleteDog(dog);
            }
        })
        // navigate('/')
        // window.location.reload(false)
    }
    
    console.log(name)
    console.log(likes)

    const amountLikes = likes.length

    console.log(amountLikes)

    return (
        <>
            <div className="dog">
                <Link className="item-link" to={`/dogs/${id}`}> <h2>{name}</h2></Link>
                <p className="book-detail">About: {about}</p>
                <p className="book-detail">Gender: <i>{gender}</i></p>
                <p>{amountLikes} ❤️</p>
                <button className="button"><Link id="edit-button" to={`/dogs/${id}/edit`}>Edit</Link></button>
                <button className="button" onClick={handleDelete} >Delete</button>
            </div>
        </>
    );
}

export default DogCard;