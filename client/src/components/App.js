import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Welcome from "./Welcome";
import UserProfile from "./UserProfile";
import DogDetails from "./DogDetails";

function App() {

  const [user, setUser] = useState(null);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/dogs")
    .then(r => r.json())
    .then(data => setDogs(data))
  }, [setDogs]);

  console.log(dogs)

  function handleDeleteDog(deletedDog) {
    setDogs((dogs) =>
      dogs.filter((dog) => dog.id !== deletedDog.id)
    );
  }


  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>
            <Route path="/" element={<Home user={user} dogs={dogs} setDogs={setDogs} onDeleteDog={handleDeleteDog} />} />
            <Route path="/welcome" element={<Welcome user={user}/>} />
            <Route path="/profile" element={<UserProfile user={user}/>}/>
            <Route path="/dogs/:id" element={<DogDetails dogs={dogs} user={user}/>}/>
            {/* <Route  path='/dogs/:id/edit' element={<EditDogForm updateDog={updateDog}/>}/> */}
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
