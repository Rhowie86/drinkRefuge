import React, { useRef } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const email = useRef();

  const existDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists) {
        localStorage.setItem("refuge_user", exists.id);
        history.push("/");
      } else {
        existDialog.current.showModal();
      }
    });
  };

  return (
      
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>User does not exist</div>
        <Button
          color="primary"
          className="button--close"
          onClick={(e) => existDialog.current.close()}
        >
          Close
        </Button>
      </dialog>

      <section>
        <form className="form--login" onSubmit={handleLogin}>
        <div className="video">  
        <video className="video-itself" width="320" height="240" autoPlay muted>
            <source src="/images/drinkRefuge.mp4" type="video/mp4" />
        </video> 
        </div>
        
          <fieldset>
            <label className="userName" htmlFor="inputEmail"> User Name </label>
            <input
            
              type="username"
              id="username"
              className="form-control"
              placeholder="UserName"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="emailLabel" htmlFor="inputEmail"> Email address </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <Button 
            className="btn-signin"
            color="secondary"
            type="submit">
                Sign in
            </Button>
          </fieldset>
        </form>
      </section>
      <Button
        color="secondary"
        onClick={(() => {
            history.push("/register")
        })}>
            Register
        </Button>
    </main>

    
  );
};
