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
                <Link className="navbar__link" to="/Posts">Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Ores">Ores</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Refineries">Refineries</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Stores">Stores</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Noobs-Guide">Noobs Guide</Link>
            </li>
        </ul>
    )
}