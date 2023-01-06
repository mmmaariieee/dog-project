import DogCard from './DogCard';

function DogContainer({ user, dogs, setDogs, onDeleteDog }) {

    console.log(dogs)

    return (
        <div className='cards'>
            {dogs.map(dog => <DogCard key={dog.id} dog={dog} setDogs={setDogs} dogs={dogs} onDeleteDog={onDeleteDog} user={user} />)}
        </div>
    );
  }
  
export default DogContainer;
