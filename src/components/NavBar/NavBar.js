import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./navbar.css"

export const NavBar = (props) => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Drinks">Cocktail Recipe List</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/userDrinks">My Drinks</Link>
            </li>
            <div>
            <button onClick={() => {localStorage.removeItem("refuge_user")}}
                    onClick={() => {history.push("/login")}}>
                Log out
            </button>
            </div>
        </ul>
    )
}