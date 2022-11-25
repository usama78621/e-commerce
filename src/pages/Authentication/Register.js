import React from "react";
import FromRow from "components/FormRow";
import "scss/_register.scss";

const Register = () => {
  return (
    <div className="full-page">
      <form className="from bg-light">
        <h3 className="text-center">{"user" ? "Login" : "Register"}</h3>
        <FromRow name="name" type="text" />
        <FromRow name="email" type="email" />{" "}
        <FromRow name="password" type="password" />
        <button type="submit" className="btn bg-primary">
          submit
        </button>
      </form>
    </div>
  );
};

export default Register;
