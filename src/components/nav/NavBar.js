import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Mines-R-Us</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Ores</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Refineries</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Stores</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Noobs Guide</Link>
            </li>
        </ul>
    )
}