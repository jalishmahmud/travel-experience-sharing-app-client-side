import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loader from "../../../images/loding.gif";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Register.css";
const Register = () => {
  const { user, googleSignIn, isLoading } = useAuth();
  const [registerInfo, setRegisterInfo] = useState({});
  const getInputFieldValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterInfo = { ...registerInfo };
    newRegisterInfo[field] = value;
    setRegisterInfo(newRegisterInfo);
  };
  const handleRegister = (e) => {
    console.log(registerInfo);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    googleSignIn();
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="register-page">
        <div className="register">
          <div className="register-form">
            <h3>Register</h3>
            <span className="loader">
              {isLoading && <img width="30" src={loader} alt="" />}
            </span>
            <form onSubmit={handleRegister}>
              <input
                onBlur={getInputFieldValue}
                className="input-field"
                name="name"
                type="text"
                placeholder="Your Name"
              />
              <input
                onBlur={getInputFieldValue}
                className="input-field"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <input
                onBlur={getInputFieldValue}
                className="input-field"
                name="password"
                type="password"
                placeholder="Password"
              />
              <button className="submit-button" type="submit">
                Register
              </button>
            </form>
            <span>
              Already have account? <Link to="/login">Login here</Link>
            </span>

            <button
              onClick={handleGoogleSignIn}
              className="submit-button google-color"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
