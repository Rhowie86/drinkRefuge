import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";

export const DrinkCard = ({ drink }) => {
  const history = useHistory()
  return (

    <div>
      <Card  className="card-body" body> 
      {/* style={{width: "45%", marginLeft:"2%", marginBottom:"3%"}}> */}
        <CardTitle tag="h5">{drink.drinkName}</CardTitle>
        <CardText>Category: {drink.category?.categoryName}</CardText>
        <Button style={{width: "80%", marginLeft:"6%", marginBottom:"3%"}} onClick={()=>{history.push(`/drinks/detail/${drink.id}`)}}>View Details</Button>
      </Card>
    </div>

    // <section className="drink">
    //   <h3 className="drink__name">
    //     <Link to={`/drinks/detail/${drink.id}`}>{drink.drinkName}</Link>
    //   </h3>
    //   <div className="drink__category">
    //     Category: {drink.category?.categoryName} drink
    //   </div>
      
    // </section>
  );
};
