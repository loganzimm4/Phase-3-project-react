import React, { useState, useEffect } from 'react'
import WorldDetail from './WorldDetail'

function World({ world }) {
  const [selectWorld, setSelectWorld] = useState([])

  const handleClick = e => {
    fetch(`http://localhost:9292/world/${world.id}`)
      .then(resp => resp.json())
      .then(data => setSelectWorld(data))
  }

  return (
    <>
      <h1 onClick={handleClick}>{world.name_of_world}</h1>
    </>
  )
}

export default World