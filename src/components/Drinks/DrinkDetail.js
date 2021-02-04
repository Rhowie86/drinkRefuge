import React, { useContext, useEffect, useState } from "react"
import { DrinkContext } from "./DrinkProvider"
import { DrinkIngredientContext } from "../DrinkIngredients/DrinkIngredientsProvider"
import { useParams, useHistory } from "react-router-dom"

export const DrinkDetail = () => {
    const { getDrinkById } = useContext(DrinkContext)
    const { getDrinkIngredients, drinkIngredients } = useContext(DrinkIngredientContext)

    const  [ drinks, setDrink ] = useState({})
    
    const {drinkId} = useParams()
    
    useEffect(() => {
        getDrinkById(drinkId)
        .then((res) => {
            setDrink(res)
        })
        .then(getDrinkIngredients)
    }, [])

    const history = useHistory()
    
    const currentDrinkIngredients = drinkIngredients.filter(di => di.drinkId === parseInt(drinkId))

    console.log("drinks", drinks)
    console.log("drink ingredients",currentDrinkIngredients)
    return (
        <section className="drinks">
            <h3 className="drinks__name">{drinks.drinkName}</h3>
            
            <div className="drinks__category"><h2>Category: </h2>
                <ul>
                    {
                        drinks.category?.categoryName
                    }
                </ul>
            
            
            
            
            
            </div>
            <div className="drinks__ingredient">
                <h2>Ingredients: </h2>
                <ul>
                {
                    currentDrinkIngredients.map((bev) => {
                        return <li key={bev.id}>Ingredient:{bev.ingredient.ingredientName}  Measurement: {bev.measurement.measurementValue}</li>
                    })
                }
                </ul>
            <div className="drinks__user">
                <h4>Created by: {drinks.user?.name}</h4>
                {console.log("users?", drinks.user?.name)}
            </div>
              
            </div>
            <button onClick={() => {history.push(`/drinks/edit/${drinks.id}`)}}>
                Edit
            </button>
            <button onClick={() => {history.push("/drinks")}}>
                Back
            </button>
        </section>
    
    )
}