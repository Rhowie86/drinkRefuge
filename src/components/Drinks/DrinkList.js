import React, { useContext, useEffect, useState } from "react";
import { Button } from 'reactstrap';
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
    <body>
      <div className="head-img"></div>
    <div className="drinks-list">
      <div className="drinks__header">
      <h2>All Cocktails</h2>
      </div>
      <div className="category-sort">
      <select
            className="cateogry-dropdown"
            defaultValue={0}
            onChange={handleControlledInputChange}
            name="categoryId"
            id="categoryId"
            className="form-control"
            // style={{width: "25%", marginLeft:"10%", marginBottom:"3%"}}
            
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
      </div>
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
          className="btn-view-user-list"
          color="secondary"
          onClick={() => {
            history.push("/userDrinks")
          }}>
            View My Drinks
          </Button>
      </div>
      </div>
      </body>
    </>
  );
        
};
