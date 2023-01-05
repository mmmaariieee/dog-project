import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'

function EditDogForm({ user, onUpdateDog }) {

    const navigate = useNavigate()
    const { id } = useParams()

    console.log(id)

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

    useEffect(() => {
        fetch(`/dogs/${id}`)
        .then(res => res.json())
        .then(setFormData)
    },[id])

    console.log(formData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/dogs/${id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        })
        .then(res => {
            res.json().then(onUpdateDog);
            navigate(`/dogs/${id}`);
        })
    }

    return(
        <>
            <div id="edit-dog" className='App'>
                <div >
                    <label>Name: </label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} />

                    <label>Gender: </label>
                    <input type='text' name='gender' value={formData.gender} onChange={handleChange} />

                    <label>Price: </label>
                    <input type='number' name='price' value={formData.price} onChange={handleChange} />

                    <label>About: </label>
                    <input type='text' name='about' value={formData.about} onChange={handleChange} />

                    <input id="update-button" className="button" type='submit' value='Update Dog' onClick={handleSubmit} />
                </div>
            </div>
        </>
    )
}

export default EditDogForm;