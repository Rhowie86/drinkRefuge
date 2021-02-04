import React  from "react"
import { Link } from "react-router-dom"





export const DrinkCard = ({ drink }) => {
  

  return (
    <section className="drink">
      <h3 className="drink__name">
        <Link to={`/drinks/detail/${drink.id}`}>
          { drink.drinkName }
        </Link>
      </h3>
      <div className="drink__category">Category: { drink.category?.categoryName } drink</div>
      <div className="user__name">Created by: {drink.users?.userName}
        
      </div>
  </section>
)}