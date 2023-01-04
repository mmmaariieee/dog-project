import { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';

function UserProfile({user}){

    const [allLikes, setAllLikes] = useState([])
    const {first_name, last_name, username, image_url, likes} = user

    useEffect(() => {
        fetch("/likes")
            .then(r => r.json())
            .then(data => setAllLikes(data.filter((like) => like.user_id === user.id)))
    }, [setAllLikes]);


    console.log(user.id)
    console.log(allLikes)



    return (
        <div>
            <h1>{first_name} {last_name}</h1>
            <h3>Account</h3>
            <p>{image_url}</p>
            <p>{username}</p>
            <h3>The dogs I liked:</h3>
            {allLikes.map(like => <Link key={like.dog.id} className="item-link" to={`/dogs/${like.dog.id}`}> <h2>{like.dog.name}</h2></Link>)}
        </div>
    )
}

export default UserProfile;
