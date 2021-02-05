import React from "react";
import { useHistory } from "react-router-dom";


export const Home = () => {
    const history = useHistory();

    return (
    <>
    <h1>Drink Refuge</h1>
    <small>A place to store and share cocktail recipes.</small>
    <div>
      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          history.push("/register");
        }}
      >
        Register
      </button>
    </div>
  </>
);}
