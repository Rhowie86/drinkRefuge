import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { DrinkContext } from "./DrinkProvider"
import { DrinkCard } from "./DrinkCard"
import { GlasswareContext } from "../Glassware/GlasswareProvider"
import { IngredientContext } from "../Ingredients/IngredientProvider"
import { MeasurementContext } from "../Measurements/MeasurementProvider"
import { CategoryContext } from "../Category/CategoryProvider"
import { UserContext } from "../Users/UserProvider"

export const DrinkList = () => {

  const { drinks, getDrinks } = useContext(DrinkContext)
  const { measurement, getMeasurements } = useContext(MeasurementContext)
  const { ingredient, getIngredients } = useContext(IngredientContext)
  const { glassware, getGlassware } = useContext(GlasswareContext)
  const { category, getCategory } = useContext(CategoryContext)
  const { user, getUsers } = useContext(UserContext)


  useEffect(() => {
    getDrinks()
    .then(getCategory)
    .then(getGlassware)
    .then(getIngredients)
    .then(getMeasurements)
    .then(getUsers)



  }, [])





  const history = useHistory()

  return (
      <>

            <h2>Cocktail Recipe List</h2>
                <div className="drinks">
                {
        drinks.map(bev => {
          
          return <DrinkCard key={bev.id} 
                    drink={bev}
                    
                     />
        })
    }
 
                <button className="btn btn-success" onClick={() => {history.push("/drinks/create")}}>
                    Add a drink recipe
                </button>

                </div>
    </>
 )
}