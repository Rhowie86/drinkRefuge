//This component fetches all of the ingredients from the api

import React, { useState, createContext } from "react"

export const IngredientContext = createContext()


export const IngredientProvider = (props) => {
    const [ingredient, setIngredients] = useState([])

    const getIngredients = () => {
        return fetch("http://localhost:8088/ingredients")
        .then(res => res.json())
        .then(setIngredients)
    }


    
    return (
        <IngredientContext.Provider value={{
            ingredient, getIngredients
        }}>
            {props.children}
        </IngredientContext.Provider>
    )
}