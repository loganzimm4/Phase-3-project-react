import React, { useState, useEffect } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Galaxy() {
    const [enterGalaxy, setEnterGalaxy] = useState(false);

    // const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        setTimeout(() => {
            setEnterGalaxy(!e.target.value)
        }, 5000)
        // history.push("/worlds")
    }

    return (
        <div>
            <br></br>
            <br></br>
            <h2 className="galaxy_welcome">Enter Galaxy!</h2>
            <br></br>
            <form className="form" onSubmit={handleSubmit}>
                <br></br>
                <button className="button-86" value={enterGalaxy} type="submit">
                    {enterGalaxy ? "Entered" : "Enter"}
                </button>
            </form>
        </div>
    )
}

export default Galaxy;