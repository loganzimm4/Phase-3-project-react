import React from 'react'

function WorldDetail( {world, onDeleteReview}) {


    const handleDelete = () => {
        fetch(`http://localhost:9292/world/${world.id}`, {
            method:'DELETE',
        }).then(res=>res.json())
        .then(deletedId => onDeleteReview(deletedId))
    }


    return(
    <>
        <h1>{world.name_of_world}</h1>
        <button onClick={handleDelete}>delet me</button>
    </>
    )
}
export default WorldDetail