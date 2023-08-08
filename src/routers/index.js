import React from "react";
import Login from "../pages/login";
import Register from "../pages/register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRouter from "../routers/protectedRouter";
function Routers() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default Routers;
