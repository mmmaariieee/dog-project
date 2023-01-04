import DogCard from './DogCard';

function DogContainer({dogs}) {
    return (
     <div className="content">
         <div className="grid-container">
             {dogs.map(dog => <DogCard key={dog.id} dog={dog}  />)}
         </div>
     </div>
    );
  }
  
export default DogContainer;
