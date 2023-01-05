import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewDogForm({ user, onAddDog }) {

    const navigate = useNavigate();

    const initialState = {
        image_url: "",
        name: "",
        about: "",
        gender: "",

        coat_length: "",
        size: "",
        coat_color: "",
        date_of_birth: "0000-00-00",

        price: 0,

        city: "",
        state: "",
        user_id: user.id,
        breed_id: 3
    }

    const [formData, setFormData] = useState(initialState);

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newDog) => {
            setFormData(initialState);
            onAddDog(newDog);
            navigate(`/dogs/${newDog.id}`);
        })
    }

    return (
        <div className="form">
            <h2>New Dog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image_url">Image URL: </label>
                <input
                    type="text"
                    id="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                />
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="about">About: </label>
                <input
                    type="text"
                    id="about"
                    value={formData.about}
                    onChange={handleChange}
                />
                <label htmlFor="description">Gender: </label>
                <input
                    type="text"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                />
                <label htmlFor="price">Price: </label>
                <input
                    type="number"
                    id="price"
                    max="200000"
                    value={formData.price}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>


        </div>
    )
}

export default NewDogForm;