import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const protectedRouter = () => {
  const isAuth = useAuth;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default protectedRouter;
