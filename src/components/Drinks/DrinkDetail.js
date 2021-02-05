import React, { useContext, useEffect, useState } from "react";
import { DrinkContext } from "./DrinkProvider";
import { DrinkIngredientContext } from "../DrinkIngredients/DrinkIngredientsProvider";
import { useParams, useHistory } from "react-router-dom";

export const DrinkDetail = () => {
  const { getDrinkById, deleteDrink } = useContext(DrinkContext);
  const {
    getDrinkIngredients,
    drinkIngredients,
    deleteDrinkIngredient,
  } = useContext(DrinkIngredientContext);

  const [drinks, setDrink] = useState({});

  const { drinkId } = useParams();
  //filter over drink ingredients and match to the drink id THEN delete the matching ingredient object
  //THEN delete the drink object
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

  return (
    <section className="drinks">
      <h3 className="drinks__name">{drinks.drinkName}</h3>

      <div className="drinks__category">
        <h2>Category: </h2>
        <ul>{drinks.category?.categoryName}</ul>
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
          <h4>Created by: {drinks.user?.name}</h4>
        </div>
      </div>
      <button
        onClick={() => {
          history.push(`/drinks/edit/${drinks.id}`);
        }}
      >
        Edit
      </button>
      <button onClick={handleDelete}>Delete Drink</button>
      <button
        onClick={() => {
          history.push("/drinks");
        }}
      >
        Back
      </button>
    </section>
  );
};
