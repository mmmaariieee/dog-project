import DogCard from './DogCard';

function DogContainer({dogs, setDogs}) {

    console.log(dogs)

    return (
     <div className="content">
         <div className="grid-container">
             {dogs.map(dog => <DogCard key={dog.id} dog={dog} setDogs={setDogs} dogs={dogs} />)}
         </div>
     </div>
    );
  }
  
export default DogContainer;
