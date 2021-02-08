import React, { useContext, useEffect, useState } from "react";
import { DrinkContext } from "./DrinkProvider";
import { DrinkIngredientContext } from "../DrinkIngredients/DrinkIngredientsProvider";
import { useParams, useHistory } from "react-router-dom";

export const DrinkDetail = () => {
  const { getDrinkById, deleteDrink, addDrink } = useContext(DrinkContext);
  const {
    getDrinkIngredients,
    drinkIngredients,
    deleteDrinkIngredient,
  } = useContext(DrinkIngredientContext);


  const [drink, setDrink] = useState({});

  const { drinkId } = useParams();
  const userId = parseInt(localStorage.getItem("refuge_user"));

  const enableButton = userId === drink.userId;

  //   filter over drink ingredients and match to the drink id THEN delete the matching ingredient object
  //   THEN delete the drink object
  const handleDelete = () => {
    const drinkIngredientsDelete = drinkIngredients.filter(
      (di) => di.drinkId === parseInt(drinkId)
    );
    drinkIngredientsDelete.forEach((ingredient) => {
      deleteDrinkIngredient(ingredient.id);
    });

    deleteDrink(drinkId).then(() => {
      history.push("/drinks");
    });
  };

  const handleAdd = () => {
    const newDrink = { ...drink };
    newDrink.userId = userId;
    delete newDrink.id;
    delete newDrink.category;
    delete newDrink.user;
    delete newDrink.glassware;
    console.log("new drink", newDrink)
    
    return addDrink(newDrink);
  };


  useEffect(() => {
    getDrinkById(drinkId)
      .then((res) => {
        setDrink(res);
      })
      .then(getDrinkIngredients);
  }, []);

  const history = useHistory();

  const currentDrinkIngredients = drinkIngredients.filter(
    (di) => di.drinkId === parseInt(drinkId)
  );

  const showButtonsForUser = () => {
    return (
      <div>
        {/* <button
          onClick={() => {
            history.push(`/drinks/edit/${drink.id}`);
          }}
        >
          Edit
        </button> */}

        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete Drink
        </button>
        <button
          onClick={() => {
            history.push("/drinks");
          }}
        >
          Back
        </button>
        </div>
    )}
  

  const showButtonsForNonOwner = () => {
      return (
    <div>
      <button
        onClick={() => {
          history.push("/drinks")
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          handleAdd()
          history.push("/userDrinks")
        }}
      >
        Add drink to user list
      </button>
    </div> 
      )
  }

  return (
    <section className="drinks">
      <h3 className="drinks__name">{drink.drinkName}</h3>

      <div className="drinks__category">
        <h2>Category: </h2>
        <ul>{drink.category?.categoryName}</ul>
      </div>
      <div className="drinks__ingredient">
        <h2>Ingredients: </h2>
        <ul>
          {currentDrinkIngredients.map((bev) => {
            return (
              <li key={bev.id}>
                Ingredient:{bev.ingredient.ingredientName} Measurement:{" "}
                {bev.measurement.measurementValue}
              </li>
            );
          })}
        </ul>
        <div className="drinks__user">
          <h4>Created by: {drink.user?.name}</h4>
        </div>
      </div>
      <div>
        {enableButton ? showButtonsForUser() : showButtonsForNonOwner()}
      </div>
    </section>
  );
};

// {enableButton ? function for current owner : function for not owner}
