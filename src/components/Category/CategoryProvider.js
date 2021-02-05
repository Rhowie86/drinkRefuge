//This component fetches all of the measurements from the API

import React, { useState, createContext } from "react"

export const CategoryContext = createContext()


export const CategoryProvider = (props) => {
    const [category, setCategory] = useState([])

    const getCategory = () => {
        return fetch("http://localhost:8088/categories")
        .then(res => res.json())
        .then(setCategory)
        
    }


    
    return (
        <CategoryContext.Provider value={{
            category, getCategory
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}