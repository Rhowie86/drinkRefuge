import React from "react";
import { Button } from "reactstrap"
import { useHistory } from "react-router-dom"

export const Home = () => {

    const history = useHistory()

    return (
    <>
          <div className="video">  
        <video className="video-itself" width="320" height="240" autoPlay muted>
            <source src="/images/drinkRefuge.mp4" type="video/mp4" />
        </video> 
        </div>
        <div className="home-btns">
        <Button 
            className="home-btn-login"
            color="secondary"
            onClick={(() => {
                history.push("/drinks")
            })}>
                All Drinks
            </Button>
        
        <Button
        className="home-btn-reg"
        color="secondary"
        onClick={(() => {
            history.push("/userDrinks")
        })}>
            My Drinks
        </Button>
        </div>

    </>
            )
}