import React, { useContext, useEffect } from "react";
import { Button } from "reactstrap"
import { useHistory } from "react-router-dom";
import { DrinkContext } from "./DrinkProvider";
import { DrinkCard } from "./DrinkCard";
import { UserContext } from "../Users/UserProvider";

export const UserDrinkList = () => {
  const { drinks, getDrinks } = useContext(DrinkContext);
  const userId = parseInt(localStorage.getItem("refuge_user"))

  useEffect(() => {
    getDrinks()
  }, []);

  const history = useHistory();

  const currentUserDrinks = drinks.filter(
      (userDrink) => userId === userDrink.userId)

  return (
    <>
    <body>
    
    <div className="head-img"></div>
    <div className="user-drink-list">
      <div className="user-drink-header"><h2>My Recipe List</h2></div>
      <div className="drinks">
        {currentUserDrinks.map((userDrink) => {
          return <DrinkCard key={userDrink.id} drink={userDrink} />;
        })}</div>

        <div className="drinks__buttons">
        <Button
          className="btn-add"
          color="secondary"
          onClick={() => {
            history.push("/drinks/create");
          }}
        >
          Add a drink recipe
        </Button>
        <Button
            className="btn-back"
            color="secondary"
            onClick={() => {
                history.push("/drinks")
            }}>
                Back
            </Button>
      </div>
      </div>
      </body>
    </>
  );
};
