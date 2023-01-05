import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ user, setUser }) {

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate('/');
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">{user ? "All Dogs" : "Home"}</Link>
      </div>
      <div>
        {user ? (
          <>
            <Link to="/dogs/new">Add a Dog</Link>
            <Link to="/profile">My Profile</Link>
            <button onClick={handleLogoutClick}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;