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






export const ApplicationViews = () => {
  return (
    <>
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
          <Route path="/drinks/create">
              <DrinkForm />
          </Route>
          <Route path="/drinks/detail/:drinkId(\d+)">
              <DrinkDetail />
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
