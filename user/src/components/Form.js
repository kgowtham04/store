import React from "react";
import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";
const Form = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    setError(validation(user));
    if (validation(user)["username"] || validation(user)["password"]) {
      event.preventDefault();
    } else {
      navigate("/datas");
    }
  };
  return (
    <div className="container">
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter the name"
            value={user.username}
            onChange={handleChange}
          ></input>
          <p>{error.username}</p>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the password"
            value={user.password}
            onChange={handleChange}
          ></input>
          <p>{error.password}</p>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
