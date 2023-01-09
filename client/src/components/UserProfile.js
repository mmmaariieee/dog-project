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
            <div className="card center medium-card" >
                <img src={image_url} alt={first_name} />
                <h1>{first_name} {last_name}</h1>
                <h2>{username}</h2>
                <p>📞 {email}</p>
                <p>📤 {phone_number}</p>
            </div>
            <h3 className='center'>The dogs I liked:</h3>
            <div className='cards'>
                {unique.map(like =>
                    <Link className="item-link" to={`/dogs/${like.dog.id}`}>
                        <div className='card small-card' key={like.dog.id}>
                            <div className='center'>
                                <img className="img-h" src={like.dog.image_url} alt={like.dog.name} />
                                <h2>{like.dog.name}</h2>
                                <p><i>{like.dog.location}</i></p>
                            </div>
                        </div>
                    </Link>)}
            </div>
        </div>
    )
}

export default UserProfile;
