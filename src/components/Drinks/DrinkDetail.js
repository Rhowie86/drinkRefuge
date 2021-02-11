import React, { useContext, useEffect, useState } from "react";
import { Button } from "reactstrap"
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
        <div className="drinks__buttons">
        {/* <button
          onClick={() => {
            history.push(`/drinks/edit/${drink.id}`);
          }}
        >
          Edit
        </button> */}

        <Button
          className="btn-back"
          color="secondary"
          onClick={() => {
            history.push("/drinks");
          }}
        >
          Back
        </Button>

        <Button
          className="btn-delete"
          color="secondary"
          onClick={handleDelete}
        >
          Delete Drink
        </Button>
        </div>
    )}
  

  const showButtonsForNonOwner = () => {
      return (
    <div className="drinks__buttons">
      <Button
        className="btn-back"
        color="secondary"
        onClick={() => {
          history.push("/drinks")
        }}
      >
        Back
      </Button>
      <Button
        className="btn-add-user"
        color="secondary"
        onClick={() => {
          handleAdd()
          history.push("/userDrinks")
        }}
      >
        Add to my list
      </Button>
    </div> 
      )
  }

  return (
      <body>
    <div className="head-img"></div>
    <section className="drink-details">
      <h2 className="drinks__name">{drink.drinkName}</h2>

      <div className="drinks__category">
        <h4 className="category">Category: {drink.category?.categoryName}</h4>
        
      </div>
      <div className="drinks__ingredient">
        <h2 className="drinks__ingredient">Ingredients </h2>
        
          {currentDrinkIngredients.map((bev) => {
            return ( <>
                <div>
                    <ul>
              <li className="ingredient__name" key={bev.id}>
              Ingredient: {bev.ingredient.ingredientName} 
              </li>
              </ul>
              </div>
              <div>
                  <ul>
                  <li className="measurement">
                  Measurement: {bev.measurement.measurementValue} oz.
                  </li>
                  </ul>
              </div>
          </>  );
        })}
        </div>
        
        <div className="drinks__user">
          <h4>Created by: {drink.user?.name}</h4>
        </div>
      <div className="details__buttons">
        {enableButton ? showButtonsForUser() : showButtonsForNonOwner()}
      </div>
    </section>
    </body>
  );
};

// {enableButton ? function for current owner : function for not owner}
