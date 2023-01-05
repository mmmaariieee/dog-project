import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setUser }) {
    const [image_url, setImageUrl] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumbder] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image_url,
                first_name,
                last_name,
                username,
                email,
                phone_number,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        })
        navigate('/welcome');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

                <label htmlFor="image_url">Image URL</label>
                <input
                    type="text"
                    id="image_url"
                    autoComplete="off"
                    value={image_url}
                    onChange={(e) => setImageUrl(e.target.value)}
                />

                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    autoComplete="off"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    autoComplete="off"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="phone_number">Phone Number</label>
                <input
                    type="text"
                    id="phone_number"
                    autoComplete="off"
                    value={phone_number}
                    onChange={(e) => setPhoneNumbder(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <label htmlFor="password">Password Confirmation</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
