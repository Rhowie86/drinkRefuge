import React, { useRef } from "react";
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
        history.push("/drinks");
      } else {
        existDialog.current.showModal();
      }
    });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>User does not exist</div>
        <button
          className="button--close"
          onClick={(e) => existDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Drink Refuge</h1>
          <h2>Sign In</h2>
          <fieldset>
            <label htmlFor="inputEmail"> User Name </label>
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
            <label htmlFor="inputEmail"> Email address </label>
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
            <button type="submit">Sign in</button>
          </fieldset>
        </form>
      </section>
      <button
        onClick={(() => {
            history.push("/register")
        })}>
            Register
        </button>
    </main>
  );
};
