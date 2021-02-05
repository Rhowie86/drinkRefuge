import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./Applicationviews"
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"


export const Refuge = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("refuge_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);