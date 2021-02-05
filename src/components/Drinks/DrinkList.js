import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DrinkContext } from "./DrinkProvider";
import { DrinkCard } from "./DrinkCard";
import { GlasswareContext } from "../Glassware/GlasswareProvider";
import { IngredientContext } from "../Ingredients/IngredientProvider";
import { MeasurementContext } from "../Measurements/MeasurementProvider";
import { CategoryContext } from "../Category/CategoryProvider";
import { UserContext } from "../Users/UserProvider";

export const DrinkList = () => {
  const { drinks, getDrinks } = useContext(DrinkContext);
  const { measurement, getMeasurements } = useContext(MeasurementContext);
  const { ingredient, getIngredients } = useContext(IngredientContext);
  const { glassware, getGlassware } = useContext(GlasswareContext);
  const { category, getCategory } = useContext(CategoryContext);
  const { user, getUsers } = useContext(UserContext);

  useEffect(() => {
    getDrinks()
      .then(getCategory)
      .then(getGlassware)
      .then(getIngredients)
      .then(getMeasurements)
      .then(getUsers);
  }, []);

  const history = useHistory();

  return (
    <>
      <h2>Cocktail Recipe List</h2>
      <div className="category-sort">
      <select
            defaultValue={drinks.categoryId}
            // onChange={handleControlledInputChange}
            name="categoryId"
            id="categoryId"
            className="form-control"
          >
            <option value="0">Select a category</option>
            {category.map((c) => (
              <option key={c.id} value={c.id}>
                {c.categoryName}
              </option>
            ))}
          </select>
      </div>
      <div className="drinks">
        {drinks.map((bev) => {
          return <DrinkCard key={bev.id} drink={bev} />;
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
            history.push("/userDrinks")
          }}>
            View My Drinks
          </button>
      </div>
    </>
  );
};
