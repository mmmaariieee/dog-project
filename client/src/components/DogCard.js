import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Likes from './Likes';

function DogCard({ user, dog, onDeleteDog }) {
    const [displayedLikes, setDisplayedLikes] = useState([])
    const [inCart, onAddToCart] = useState(false)
    const { id, image_url, name, about, gender, coat_length, size, coat_color, date_of_birth, price, location, likes, reviews } = dog
    const initialState = {
        cart_id: user.cart.id,
        dog_id: dog.id
    }

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


    function handleAddToCart(e) {
        e.preventDefault();
        fetch("/cart_dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(initialState),
        })
        .then((r) => r.json())
        .then(() => {
            onAddToCart(true);
        })
    }

    console.log(inCart)

    return (
        <>
            <div className="card small-card">
                <div className='center'>
                    <button className="button"><Link id="edit-button" to={`/dogs/${id}/edit`}>Edit</Link></button>
                    <Link className="item-link" to={`/dogs/${id}`}> <h2>{name}</h2></Link>
                    <img src={image_url} alt={name} />
                    <p><i>{location}</i></p>
                    <p className="book-detail"><b>Gender:</b> {gender}</p>
                    <p className="book-detail"><b>About:</b> {about}</p>
                    <h1>{price}$</h1>
                    {/* <div className="horizontal">
                    </div> */}
                    {inCart ? <p>is in cart</p> : <button className="button" onClick={handleAddToCart} >Add to cart</button>}
                    <button className="button" onClick={handleDelete} >Delete</button>
                    <Likes likes={displayedLikes} onAddLike={handleAddLike} user={user} dog={dog} />
                </div>
            </div>
        </>
    );
}

export default DogCard;