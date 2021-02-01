import React from "react";
import { Route } from "react-router-dom";
//imports for drinks
import { DrinkProvider } from "./components/Drinks/DrinkProvider";
import { DrinkList } from "./components/Drinks/DrinkList";
//imports for users
import { UserProvider } from "./components/Users/UserProvider";
export const ApplicationViews = () => {
  return (
    <>
      <DrinkProvider>
        <UserProvider>
          <Route exact path="/drinks">
            <DrinkList />
          </Route>
        </UserProvider>
      </DrinkProvider>
    </>
  );
};
