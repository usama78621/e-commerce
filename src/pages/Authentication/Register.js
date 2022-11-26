import React, { useState } from "react";
import FromRow from "components/FormRow";
import "scss/_register.scss";
import { useGobalAuthContext } from "context/AuthContext";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
  });
  const { register } = useGobalAuthContext();

  const handleChange = (e) => {
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const { name, email, password, isMember } = state;
    e.preventDefault();
    if (!name || !email || !password) {
      return alert("please provide all values");
    }
    if (isMember) {
      // login({ email, password });
      alert("usama");
    } else {
      register({ email, password, name });
      setState({
        email: "",
        password: "",
        name: "",
      });
    }
  };
  return (
    <div className="full-page">
      <form className="from bg-light" onSubmit={onSubmit}>
        <h3 className="text-center">{"user" ? "Login" : "Register"}</h3>
        <FromRow
          name="name"
          type="text"
          handleChange={handleChange}
          value={state.name}
        />
        <FromRow
          name="email"
          type="email"
          handleChange={handleChange}
          value={state.email}
        />{" "}
        <FromRow
          name="password"
          type="password"
          handleChange={handleChange}
          value={state.password}
        />
        <button type="submit" className="btn bg-primary w-100 mt-4">
          submit
        </button>
      </form>
    </div>
  );
};

export default Register;
