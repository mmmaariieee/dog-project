import React from "react";
import DogContainer from "./DogContainer";

function Home({ user, dogs }) {

    if (user) {
        console.log(user.username)
    }

    console.log(dogs)

    return (
        <>
            {user ? (
                <>
                    <h1>Welcome, {user.username}!</h1>
                    <DogContainer dogs={dogs} />
                </>
            ) : (
                <h1>Please Login or Sign Up</h1>
            )}
        </>
    )

}

export default Home;
