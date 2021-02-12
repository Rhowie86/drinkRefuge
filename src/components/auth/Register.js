import React, { useRef } from "react";
import { Button } from "reactstrap"
import { useHistory } from "react-router-dom";

export const Register = (props) => {
  const userName = useRef();
  const email = useRef();
  const conflictDialog = useRef();
  const history = useHistory();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((res) => res.json())
      .then((user) => !!user.length);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    existingUserCheck().then((userExists) => {
      if (!userExists) {
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            name: `${userName.current.value}`,
          }),
        })
          .then((res) => res.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("refuge_user", createdUser.id);
              history.push("/drinks");
            }
          });
      } else {
        conflictDialog.current.showModal();
      }
    });
  };

  return (
    <main className="register-form">

      <dialog className="dialog dialog--password" ref={conflictDialog}>
        <div>Account with that email address already exists</div>
        <Button
          className="button--close"
          onClick={(e) => conflictDialog.current.close()}
        >
          Close
        </Button>
      </dialog>

      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Create a username</h1>
        <fieldset>
          <label htmlFor="userName"> User Name </label>
          <input
            ref={userName}
            type="text"
            name="userName"
            className="form-control label-user"
            placeholder="User name"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input
            ref={email}
            type="email"
            name="email"
            className="form-control label-email"
            placeholder="Email address"
            required
          />
        </fieldset>
        <fieldset>
          <Button 
          className="btn-register"
          color="secondary"
          type="submit"> Register </Button>
        </fieldset>
      </form>
    </main>
  );
};
