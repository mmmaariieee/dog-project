import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReviewContainer from './ReviewContainer';
import NewReviewForm from './NewReviewForm';

function DogDetails({ user }) {
  const [dog, setDog] = useState({})
  const [displayedReviews, setDisplayedReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  const params = useParams()

  useEffect(()=>{
    fetch(`/dogs/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setDog(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[params.id])

  const { id, image_url, name, about, gender, coat_length, size, coat_color, date_of_birth, price, location, reviews, likes } = dog

  console.log(`/dogs/${params.id}/reviews`)
  
  useEffect(() => {
    fetch(`/dogs/${params.id}/reviews`)
      .then((r) => r.json())
      .then((data) => setDisplayedReviews(data));
  }, []);

  console.log(displayedReviews)

  if(loading) return <div className="loading"><div></div><div></div><div></div><div></div></div>
  if(errors) return <h1>{errors}</h1>

  function handleAddReview(addedReview) {
    setDisplayedReviews((displayedReviews) => [...displayedReviews, addedReview]);
  }

  function handleDeleteReview(deletedReview) {

    setDisplayedReviews((displayedReviews) =>
      displayedReviews.filter((displayedReview) => displayedReview.id !== deletedReview.id)
    )
  }

  return (
    <div >
      <div className="card center medium-card">
        <img src={image_url} alt={name} />
        <h1>{name}</h1>
        <p><i>{location}</i></p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Size:</b> {size}</p>
        <p><b>Coat color:</b> {coat_color}</p>
        <p><b>Coat length:</b> {coat_length}</p>
        <p><b>About:</b> {about}</p>
        <h2>{price}$</h2>
      </div>
      <h3 className='center'>Reviews : </h3>
      <ReviewContainer reviews={displayedReviews} onDeleteReview={handleDeleteReview} />
      <NewReviewForm dog={dog} onAddReview={handleAddReview} user={user} />
    </div>
  )
}

  export default DogDetails;