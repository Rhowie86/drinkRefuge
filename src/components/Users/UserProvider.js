//This component will fetch all of the users from the api
//It will also handle adding new users

import React, { useState, createContext } from "react"

export const UserContext = createContext()


export const UserProvider = (props) => {
    const [users, setUser] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUser)
    }

    const addUser = userObj => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(getUsers)
    }

    
    return (
        <UserContext.Provider value={{
            users, getUsers, addUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}