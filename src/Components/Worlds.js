import React, { useState, useEffect } from 'react'
import World from './World'
import AddWorld from './AddWorld.js'

function Worlds({ worlds, handleNewWorld }) {
  // console.log(worlds)


  return (
    <>
      {worlds.map((world) => (
        <World key={world.id} world={world} />
      ))}
      <AddWorld handleNewWorld={handleNewWorld} />
    </>
  )
}

export default Worlds