import React from 'react'

function Nav() {
  return (
    <Nav>
            <NavLink to="/">
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/World" >
                    World
                </NavLink>
                <NavLink to="/Worlds" >
                    Worlds
                </NavLink>
            </NavMenu>
        </Nav>
  )
}

export default Nav