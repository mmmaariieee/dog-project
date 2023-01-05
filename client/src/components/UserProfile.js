import { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';

function UserProfile({user}){

    const [allLikes, setAllLikes] = useState([])
    const {first_name, last_name, username, image_url, email, phone_number, likes} = user

    useEffect(() => {
        fetch("/likes")
            .then(r => r.json())
            .then(data => setAllLikes(data.filter((like) => like.user_id === user.id)))
    }, [setAllLikes]);


    console.log(user.id)
    console.log(allLikes)

    const uniqueNames = []

    const unique = allLikes.filter(like => {
        const isDuplicate = uniqueNames.includes(like.dog_id)

        if (!isDuplicate) {
            uniqueNames.push(like.dog_id)

            return true
        }

        return false
    })

    console.log(unique)



    return (
        <div>
            <img src={image_url} alt={first_name} />
            <h1>{first_name} {last_name}</h1>
            <h2>{username}</h2>
            <h4>📞 {email}</h4>
            <h4>📤 {phone_number}</h4>
            <h3>The dogs I liked:</h3>
            {unique.map(like => <div key={like.dog.id}>
                <img src={like.dog.image_url} alt={like.dog.name} />
                <Link className="item-link" to={`/dogs/${like.dog.id}`}> <h2>{like.dog.name}</h2></Link>
            </div>)}
        </div>
    )
}

export default UserProfile;
