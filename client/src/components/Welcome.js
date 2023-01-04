import React from "react";

function Welcome({ user }) {

    if (user) {
        console.log(user.username)
    }

    return (
        <>
            {user ? (
                <h1>Welcome, {user.username}!</h1>
            ) : (
                <h1>Please Login or Sign Up</h1>
            )}
        </>
    )

}

export default Welcome;