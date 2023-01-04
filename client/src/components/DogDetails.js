import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import ReviewContainer from './ReviewContainer'

function DogDetails() {
  const [dog, setDog] = useState({})
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

  console.log(dog)
 
  if(loading) return <div className="loading"><div></div><div></div><div></div><div></div></div>
  if(errors) return <h1>{errors}</h1>

  const { id, image_url, name, about, gender, coat_length, size, coat_color, date_of_birth, price, location } = dog

  return (
      <div className="content">
          <div className='wrapper'>
            <div id="book-page" >
            <h1>{name}</h1>
              <h3>About: </h3>
              <p>{about}</p>
              <h3>Gender: </h3>
              <p>{gender}</p>
              <h3>Size: </h3>
              <p>{size}</p>
              <h3>Reviews : </h3>
              {/* <div><ReviewContainer reviews={reviews}/></div> */}
            </div>
          </div>
      </div>
    )
  }

  export default DogDetails;