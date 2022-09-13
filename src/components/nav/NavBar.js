import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Packet</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login" onClick={() => localStorage.removeItem("packet_customer")}>Logout</Link>
            </li>
        </ul>
    )
}
