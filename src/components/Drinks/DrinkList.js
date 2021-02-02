import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { DrinkContext } from "./DrinkProvider"
import { DrinkCard } from "./DrinkCard"


export const DrinkList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { drinks, getDrinks } = useContext(DrinkContext)


  //useEffect - reach out to the world for something
  useEffect(() => {
    getDrinks()


  }, [])




  const history = useHistory()

  return (
      <>
            <h2>Cocktail List</h2>
                <button onClick={() => {history.push("/drinks/create")}}>
                    Add a drink recipe
                </button>

                <div className="drinks">
                {
        drinks.map(bev => {
          
          return <DrinkCard key={bev.id} 
                    drink={bev}
                    
                     />
        })
      }

                </div>
    </>
 )
}