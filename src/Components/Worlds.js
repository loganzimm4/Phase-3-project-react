import React, { useState, useEffect } from 'react'
import World from './World'

function Worlds() {
  const [worlds, setWorlds] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/worlds/')
      .then(resp => resp.json())
      .then(data => setWorlds(data))
  }, [])

  // console.log(worlds)

  return (
    <>
      <div>worlds</div>
      {worlds.map((world) => (
        <World key={world.id} world={world} />
      ))}
    </>
  )
}

export default Worlds