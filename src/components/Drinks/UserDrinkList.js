import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DrinkContext } from "./DrinkProvider";
import { DrinkCard } from "./DrinkCard";
import { UserContext } from "../Users/UserProvider";

export const UserDrinkList = () => {
  const { drinks, getDrinks } = useContext(DrinkContext);
  const { user, getUsers } = useContext(UserContext);
  const userId = parseInt(localStorage.getItem("refuge_user"))

  useEffect(() => {
    getDrinks()
      .then(getUsers);
  }, []);

  const history = useHistory();

  const currentUserDrinks = drinks.filter(
      (userDrink) => userId === userDrink.userId)

  return (
    <>
      <h2>My Recipe List</h2>
      <div className="drinks">
        {currentUserDrinks.map((userDrink) => {
          return <DrinkCard key={userDrink.id} drink={userDrink} />;
        })}

        <button
          className="btn btn-success"
          onClick={() => {
            history.push("/drinks/create");
          }}
        >
          Add a drink recipe
        </button>
        <button
            className="btn btn-primary"
            onClick={() => {
                history.push("/drinks")
            }}>
                Back
            </button>
      </div>
    </>
  );
};
