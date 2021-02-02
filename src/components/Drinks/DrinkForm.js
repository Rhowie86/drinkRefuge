import React, { useContext, useEffect, useState } from "react";
import { DrinkContext } from "./DrinkProvider";
import { UserContext } from "../Users/UserProvider";
import { GlasswareContext } from "../Glassware/GlasswareProvider";
import { IngredientContext } from "../Ingredients/IngredientProvider";
import { MeasurementContext } from "../Measurements/MeasurementProvider";
import { CategoryContext } from "../Category/CategoryProvider";

import { useHistory, useParams } from "react-router-dom";

export const DrinkForm = () => {
  const { addDrink, getDrinkById, updateDrink, getDrinks } = useContext(
    DrinkContext
  );
  const { users, getUsers } = useContext(UserContext);
  const { measurement, getMeasurements } = useContext(MeasurementContext);
  const { ingredient, getIngredients } = useContext(IngredientContext);
  const { glassware, getGlassware } = useContext(GlasswareContext);
  const { category, getCategory } = useContext(CategoryContext);

  const [drink, setDrink] = useState({
    drinkName: "",
    glasswareId: 0,
    categoryId: 0,
    usersId: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const { drinkId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getDrinks()
      .then(getUsers)
      .then(getGlassware)
      .then(getIngredients)
      .then(getMeasurements)
      .then(getCategory);
  }, []);

  const handleControlledInputChange = (event) => {
    const newDrink = { ...drink };
    let selectedVal = event.target.value;

    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }

    newDrink[event.target.id] = selectedVal;

    setDrink(newDrink);
  };

  const handleSaveDrink = () => {
    if (parseInt(drink.id) === 0) {
      window.alert("Please Set A Drink Name");
    } else {
      setIsLoading(true);

      if (drinkId) {
        updateDrink({
          id: drink.id,
          drinkName: drink.drinkName,
          glasswareId: parseInt(drink.glasswareId),
          categoryId: parseInt(drink.categoryId),
          customerId: parseInt(drink.usersId),
        }).then(() => history.push(`/drinks/detail/${drink.id}`));
      } else {
        addDrink({
          drinkName: drink.drinkName,
          glasswareId: parseInt(drink.glasswareId),
          categoryId: parseInt(drink.categoryId),
          customerId: parseInt(drink.usersId),
        }).then(() => history.push("/drinks"));
      }
    }
  };

  useEffect(() => {
    getDrinks()
      .then(getUsers)
      .then(() => {
        if (drinkId) {
          getDrinkById(drinkId).then((bev) => {
            setDrink(bev);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      });
  }, []);

  return (
    <form className="drinkForm">
      <h2 className="drinkForm__title">
        {drinkId ? "Edit Drink" : "Add Drink"}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Drink name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Drink name"
            value={drink.drinkName}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Glassware: </label>
          <select
            defaultValue={drink.glasswareId}
            onChange={handleControlledInputChange}
            name="glasswareId"
            id="glasswareId"
            className="form-control"
          >
            <option value="0">Select glassware</option>
            {glassware.map((g) => (
              <option key={g.id} value={g.id}>
                {g.glasswareName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Ingredient: </label>
          <select
            defaultValue={drink.ingredientId}
            onChange={handleControlledInputChange}
            name="ingredient"
            id="ingredientId"
            className="form-control"
          >
            <option value="0">Select an ingredient</option>
            {ingredient.map((i) => (
              <option key={i.id} value={i.id}>
                {i.ingredientName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Measurement: </label>
          <select
            defaultValue={drink.measurementId}
            onChange={handleControlledInputChange}
            name="measurement"
            id="measurementId"
            className="form-control"
          >
            <option value="0">Select a measurement</option>
            {measurement.map((m) => (
              <option key={m.id} value={m.id}>
                {m.measurementValue}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Category: </label>
          <select
            defaultValue={drink.categoryId}
            onChange={handleControlledInputChange}
            name="category"
            id="categoryId"
            className="form-control"
          >
            <option value="0">Select a category</option>
            {category.map((category) => (
              <option key={category.id} value={category.id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        className="btn btn-success"
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault();
          handleSaveDrink();
        }}
      >
        {drinkId ? "Save Drink" : "Add Drink"}
      </button>
    </form>
  );
};
