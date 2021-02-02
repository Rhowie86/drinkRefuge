//This component will reach out to my api and get all of the drinks
//This component will also handle crud functionality and update the api

import React, { useState, createContext } from "react"


export const DrinkContext = createContext()


export const DrinkProvider = (props) => {
    const [drinks, setDrinks] = useState([])

    const getDrinkById = (id) => {
        return fetch(`http://localhost:8088/drinks/${id}`)
            .then(res => res.json())
    }

    const getDrinks = () => {
        return fetch("http://localhost:8088/drinks?_embed=category")
        .then(res => res.json())
        .then(setDrinks)
    }

    const addDrink = drinkObj => {
        return fetch("http://localhost:8088/drinks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(drinkObj)
        })
        .then(getDrinks)
    
     
    }

    const deleteDrink = drinkId => {
        return fetch(`http://localhost:8088/drinks/${drinkId}`, {
            method: "DELETE"
        })
            .then(getDrinks)
    }

    const updateDrink = drinkObj => {
        return fetch(`http://localhost:8088/drinks/${drinkObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(drinkObj)
        })
          .then(getDrinks)
      }
 
   return (
    <DrinkContext.Provider value={{
    drinks, addDrink, getDrinks, getDrinkById, deleteDrink, updateDrink
    }}>
        {props.children}
    </DrinkContext.Provider>
   )
}