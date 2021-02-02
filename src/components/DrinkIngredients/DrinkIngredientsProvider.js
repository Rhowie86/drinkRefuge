// i think this component is going to fetch data from the join table to assemble a drink recipe?

//This component fetches all of the measurements from the API

import React, { useState, createContext } from "react"

export const DrinkIngredientContext = createContext()


export const DrinkIngredientProvider = (props) => {
    const [recipe, setRecipeDetails] = useState([])

    const getDrinkIngredients = () => {
        return fetch("http://localhost:8088/drinkIngredients")
        .then(res => res.json())
        .then(setRecipeDetails)
    }


    
    return (
        <DrinkIngredientContext.Provider value={{
            recipe, getDrinkIngredients
        }}>
            {props.children}
        </DrinkIngredientContext.Provider>
    )
}