import { React, useState } from "react";

function Likes({user, dog, likes, onAddLike}) {

    const initialState = {
        user_id: user.id,
        dog_id: dog.id
    }


    const [formData, setFormData] = useState(initialState);

    function handleClick(e) {
        e.preventDefault();
        fetch("/likes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newLike) => {
            setFormData(initialState);
            onAddLike(newLike);
        })
    }

    return (
        <>
        <h3>{likes.length} <p onClick={handleClick}>❤️</p> </h3>
        </>
    )
}

export default Likes;