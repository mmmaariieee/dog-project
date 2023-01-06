import React from "react";

function Welcome({ user }) {

    if (user) {
        console.log(user.username)
    }

    return (
        <>
            {user ? (
                <h1 className="center">Welcome, {user.username}!</h1>
            ) : (
                <h1 className="center">Please Login or Sign Up</h1>
            )}
        </>
    )

}

export default Welcome;