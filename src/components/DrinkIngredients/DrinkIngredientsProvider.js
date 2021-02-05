// i think this component is going to fetch data from the join table to assemble a drink recipe?

//This component fetches all of the measurements from the API

import React, { useState, createContext } from "react"

export const DrinkIngredientContext = createContext()


export const DrinkIngredientProvider = (props) => {
    const [drinkIngredients, setDrinkIngredients] = useState([])

    const getDrinkIngredients = () => {
        return fetch("http://localhost:8088/drinkIngredients?_expand=ingredient&_expand=measurement")
        .then(res => res.json())
        .then(drinkIng => {
            return drinkIng
        })
        .then(setDrinkIngredients)
        

    }

    const addDrinkIngredient = ingredientObj => {
        return fetch("http://localhost:8088/drinkIngredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ingredientObj)
        })
        .then(getDrinkIngredients)
    }

    const deleteDrinkIngredient = drinkId => {
        return fetch(`http://localhost:8088/drinkIngredients/${drinkId}`, {
            method: "DELETE"
        })
            .then(getDrinkIngredients)
    }
    
    return (
        <DrinkIngredientContext.Provider value={{
            drinkIngredients, getDrinkIngredients, addDrinkIngredient, deleteDrinkIngredient
        }}>
            {props.children}
        </DrinkIngredientContext.Provider>
    )
}