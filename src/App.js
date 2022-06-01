import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Nav from "./Components/Navbar/Nav"
import Worlds from "./Components/Worlds";
import World from "./Components/World";
import Galaxy from "./Components/Galaxy";


function App() {
  const [worlds, setWorlds] = useState([]);
  // const [newWorld, setNewWorld] = useState("");

  useEffect(() => {
    fetch('http://localhost:9292/worlds/')
      .then(resp => resp.json())
      .then(data => setWorlds(data))
  }, [])

  // console.log(worlds)

  // const handleWorldChange = (e) => {
  //   setNewWorld({name_of_world: e.target.value, discovered_year: e.target.value, galaxy_id: e.target.value})
  // }

  const handleNewWorld = (newWorld) => {
    setWorlds([...worlds, newWorld])
  }

  return (

    <Fragment>
      <Routes>
        <Route exact path="/" element={<Galaxy />} />
        <Route exact path="/worlds" element={<Worlds handleNewWorld={handleNewWorld} worlds={worlds} />} />
        {/* <Worlds handleNewWorld={handleNewWorld} worlds={worlds} /> */}
        <Route exact path="/world" element={<World />} />
        {/* <World /> */}
      </Routes>
    </Fragment>

  )
}

export default App