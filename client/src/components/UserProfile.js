import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function UserProfile({user}){

    const {first_name, last_name, username, image_url, likes} = user

    console.log(user)
    console.log(likes)
    likes.map(element => {
        console.log(element.user_id)
    })

    const dLikes = likes.map(element => {
        <p>{element.user_id}</p>
    })

    return (
        <div>
            <h1>{first_name} {last_name}</h1>
            <h3>Account</h3>
            <p>{image_url}</p>
            <p>{username}</p>
        </div>
    )
}

export default UserProfile;