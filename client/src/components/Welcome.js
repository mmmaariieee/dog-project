import React from "react";

function Welcome({ user }) {

    if (user) {
        console.log(user.username)
    }

    return (
        <>
            {user ? (
                <div>
                    <img className="center-button large-img" src='https://github.com/mmmaariieee/dog-project/blob/main/client/public/dogs.PNG?raw=true' />
                    <h1 className="center">Welcome, {user.username}!</h1>
                </div>
            ) : (
                <h1 className="center">Please Login or Sign Up</h1>
            )}
        </>
    )

}

export default Welcome;