import React, { useState, useEffect } from 'react'
import World from './World'
import AddWorld from './AddWorld.js'

function Worlds() {
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
    <>
      {worlds.map((world) => (
        <World key={world.id} world={world} />
      ))}
      <AddWorld handleNewWorld={handleNewWorld}/>
    </>
  )
}

export default Worlds