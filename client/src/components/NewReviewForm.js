import { React, useState } from "react";


function NewReviewForm({ user, dog, onAddReview }) {
    const initialState = {
        message: "",
        user_id: user.id,
        dog_id: dog.id
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
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newReview) => {
            setFormData(initialState);
            onAddReview(newReview);
        })
    }


    return (
        <div className="card">
            <h2>New Review</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">Message: </label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    

}

export default NewReviewForm;
