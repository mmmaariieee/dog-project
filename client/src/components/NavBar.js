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
      <Link to="/">{user ? "All Dogs" : "Home"}</Link>
        {user ? (
          <>
            <Link to="/dogs/new">Add a Dog</Link>
            <Link to="/my_cart">My Cart</Link>
            <Link to="/profile">My Profile</Link>
            <button onClick={handleLogoutClick}>Logout</button>
          </>
        ) : (
          <>
            <div>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
    </header>
  );
}

export default NavBar;