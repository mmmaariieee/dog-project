import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Likes from './Likes';

function DogCard({ user, dog, onDeleteDog }) {
    const [displayedLikes, setDisplayedLikes] = useState([])
  const { id, image_url, name, about, gender, coat_length, size, coat_color, date_of_birth, price, location, likes, reviews } = dog

    function handleDelete() {
        fetch(`/dogs/${id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
                onDeleteDog(dog);
            }
        })
    }

    useEffect(() => {
        fetch(`/dogs/${dog.id}/likes`)
          .then((r) => r.json())
          .then((data) => setDisplayedLikes(data));
    }, []);

    function handleAddLike(addedLike) {
        setDisplayedLikes((displayedLikes) => [...displayedLikes, addedLike]);
      }

    console.log(displayedLikes)

    return (
        <>
            <div className="dog">
                <Link className="item-link" to={`/dogs/${id}`}> <h2>{name}</h2></Link>
                <p className="book-detail">About: {about}</p>
                <p className="book-detail">Gender: <i>{gender}</i></p>
                <Likes likes={displayedLikes} onAddLike={handleAddLike} user={user} dog={dog} />
                <button className="button"><Link id="edit-button" to={`/dogs/${id}/edit`}>Edit</Link></button>
                <button className="button" onClick={handleDelete} >Delete</button>
            </div>
        </>
    );
}

export default DogCard;