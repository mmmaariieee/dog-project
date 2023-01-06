import React from "react";
import DogContainer from "./DogContainer";

function Home({ user, dogs, setDogs, onDeleteDog }) {

    if (user) {
        console.log(user.username)
    }

    console.log(dogs)

    return (
        <>
            {user ? (
                <>
                    {/* <h1>Welcome, {user.username}!</h1> */}
                    <DogContainer dogs={dogs} setDogs={setDogs} onDeleteDog={onDeleteDog} user={user} />
                </>
            ) : (
                <div>
                    <img className="center-button large-img" src='https://github.com/mmmaariieee/dog-project/blob/main/client/public/dogs.PNG' />
                    <h1 className="center">Dog Store</h1>
                    <h3 className="center">Please Login or Sign Up</h3>
                </div>
            )}
        </>
    )

}

export default Home;
