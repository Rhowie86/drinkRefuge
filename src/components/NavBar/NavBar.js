import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./navbar.css"

const userId = parseInt(localStorage.getItem("refuge_user"))



const ShowLogoutButton = () => {
    
    const history = useHistory()
    return (
        <div>
        <button onClick={() => {
                localStorage.removeItem("refuge_user")
                history.push("/login")
        }}>Sign Out</button>
    </div> )
    }


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/Drinks">Cocktail Recipe List</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/userDrinks">My Drinks</Link>
            </li>
            <div>
           {userId ? ShowLogoutButton() : <div></div>}
           </div>
            
        </ul>
    )
}