import React, { useState, useEffect } from 'react'
import World from './World'
import AddWorld from './AddWorld.js'

function Worlds({ worlds, handleNewWorld }) {
  // console.log(worlds)


  const onDeleteReview = (id) => {
    setWorlds(worlds.filter(world => world.id !== id))
  }

  return (
    <>
      {worlds.map((world) => (
        <World onDeleteReview={onDeleteReview} key={world.id} world={world} />
      ))}
      <AddWorld handleNewWorld={handleNewWorld} />
    </>
  )
}

export default Worlds