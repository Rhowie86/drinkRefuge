import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DrinkContext } from "./DrinkProvider";
import { DrinkCard } from "./DrinkCard";
import { CategoryContext } from "../Category/CategoryProvider";

export const DrinkList = () => {
  const { drinks, getDrinks } = useContext(DrinkContext);
  const { category, getCategory } = useContext(CategoryContext);

  const [filteredCategory, setFilteredCategory] = useState(0)

  const handleControlledInputChange = (event) => {
    const selectedCategory = filteredCategory ;
    let selectedVal = event.target.value;

    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }

    setFilteredCategory(selectedVal)
    
  }; 
  useEffect(() => {
    getDrinks()
      .then(getCategory)
  }, []);

  const [ chosenCategory, setChosenCategory] = useState([])



  useEffect(() => {
    if (filteredCategory === 0) {
      setChosenCategory(drinks)
    } else {  
    setChosenCategory(drinks.filter((drink) => drink.categoryId === filteredCategory)) } 
  }, [filteredCategory, drinks]);

  const history = useHistory();

  

  return (
    <>
      <h2>Cocktail Recipe List</h2>
      <div className="category-sort">
      <select
            defaultValue={0}
            onChange={handleControlledInputChange}
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
        {chosenCategory.map((bev) => {
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
