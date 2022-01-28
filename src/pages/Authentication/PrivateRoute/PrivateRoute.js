import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import preLoader from "../../../images/loding.gif";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <img
        style={{
          margin: "0 auto",
          display: "block",
          position: "absolute",
          top: "40%",
          right: "50%",
        }}
        src={preLoader}
        alt=""
      />
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
