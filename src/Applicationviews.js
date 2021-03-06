import React from "react";
import { Route } from "react-router-dom";
//imports for drinks
import { DrinkProvider } from "./components/Drinks/DrinkProvider";
import { DrinkList } from "./components/Drinks/DrinkList";
import { DrinkForm } from "./components/Drinks/DrinkForm"
import { DrinkDetail } from "./components/Drinks/DrinkDetail"
//imports for users
import { UserProvider } from "./components/Users/UserProvider";
import { GlasswareProvider } from "./components/Glassware/GlasswareProvider";
import { IngredientProvider } from "./components/Ingredients/IngredientProvider";
import { MeasurementProvider } from "./components/Measurements/MeasurementProvider"
import { CategoryProvider } from "./components/Category/CategoryProvider";
import { DrinkIngredientProvider } from "./components/DrinkIngredients/DrinkIngredientsProvider";
import { UserDrinkList } from "./components/Drinks/UserDrinkList"
import { Home } from "./home"






export const ApplicationViews = () => {
  return (
    <>
      <Route exact path = "/">
        <Home />
      </Route>
      
      <DrinkProvider>
        <UserProvider>
            <GlasswareProvider>
                <MeasurementProvider>
                    <IngredientProvider>
                        <CategoryProvider>
                            <DrinkIngredientProvider>
          <Route exact path="/drinks">
            <DrinkList />
          </Route>
          <Route exact path ="/userDrinks">
              <UserDrinkList />
          </Route>
          <Route path="/drinks/create">
              <DrinkForm />
          </Route>
          <Route path="/drinks/detail/:drinkId(\d+)">
              <DrinkDetail />
          </Route>
          <Route path="/drinks/edit/:drinkId(\d+)">
              <DrinkForm />
          </Route>
                            </DrinkIngredientProvider>
                        </CategoryProvider>
                    </IngredientProvider>
                </MeasurementProvider>
            </GlasswareProvider>  
        </UserProvider>
      </DrinkProvider>
    </>
  );
};
