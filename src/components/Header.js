import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <div className="NavBar">
                <NavLink className="topLink" to="/"> Home </NavLink>
                <NavLink className="topLink" to="/About">About</NavLink>
                <NavLink className="topLink" to="/Projects">Projects</NavLink>
            </div>
            
        </header>
    )

}

export default Header;