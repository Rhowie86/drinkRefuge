import React, { useState } from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
  } from 'reactstrap';
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./navbar.css"

const userId = parseInt(localStorage.getItem("refuge_user"))



const ShowLogoutButton = () => {
    
    const history = useHistory()
    return (
        <div>
        <Button 
            color="secondary"
            onClick={() => {
                localStorage.removeItem("refuge_user")
                history.push("/login")
        }}>Sign Out</Button>
    </div> )
    }

    
    
    export const NavBar = (props) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="dark" light expand="md">
        <NavbarBrand className="nav-main" href="/">Drink Refuge</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
           
                <NavLink className="navbar__link" href="/Drinks">All Cocktails</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="navbar__link" href="/userDrinks">My Cocktails</NavLink>
                </NavItem>
            {/* <NavItem>
           {userId ? ShowLogoutButton() : <div></div>}
           </NavItem> */}
           </Nav>
          <NavbarText>{userId ? ShowLogoutButton() : ""}</NavbarText>
        </Collapse>
      </Navbar>
    </div>

            
    )
}