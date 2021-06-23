import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import minesLogo from "./logo.png"



export const NavBar = (props) => {
    const logout = () => {
        localStorage.clear("mines_customer")
    }
    return (
        <>
        <ul className="navbar1">
        <li className="navbar__item active">
                <Link className="navbar__link" to="/">Mines-R-Us</Link>
        </li>
        <li className="alignRight navbar__item active">
                <Link onClick={logout}className="navbar__link" to="/login">Logout</Link>
        </li>
        </ul>
        <ul className="navbar">
            
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
                <Link className="navbar__link" to="/Equipment">Equipment</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Noobs-Guide">Noobs Guide</Link>
            </li>
        </ul>
        </>
    )
}