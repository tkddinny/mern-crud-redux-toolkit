import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Private = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.userAdmin.token);
  
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]); // Effect runs when token or navigate changes

  // Render children only if token is available
  return token ? children : null;
};

export default Private;
