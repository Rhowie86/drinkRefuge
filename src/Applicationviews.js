import React from "react";
import { Route } from "react-router-dom";
//imports for drinks
import { DrinkProvider } from "./components/Drinks/DrinkProvider";
import { DrinkList } from "./components/Drinks/DrinkList";
import { DrinkForm } from "./components/Drinks/DrinkForm"
//imports for users
import { UserProvider } from "./components/Users/UserProvider";
import { GlasswareProvider } from "./components/Glassware/GlasswareProvider";
import { IngredientProvider } from "./components/Ingredients/IngredientProvider";
import { MeasurementProvider } from "./components/Measurements/MeasurementProvider"
import { CategoryProvider } from "./components/Category/CategoryProvider";







export const ApplicationViews = () => {
  return (
    <>
      <DrinkProvider>
        <UserProvider>
            <GlasswareProvider>
                <MeasurementProvider>
                    <IngredientProvider>
                        <CategoryProvider>
          <Route exact path="/drinks">
            <DrinkList />
          </Route>
          <Route path="/drinks/create">
              <DrinkForm />
          </Route>
                        </CategoryProvider>
                    </IngredientProvider>
                </MeasurementProvider>
            </GlasswareProvider>  
        </UserProvider>
      </DrinkProvider>
    </>
  );
};
