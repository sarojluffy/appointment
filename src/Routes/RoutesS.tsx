import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../pages/Home";
import Main from "../pages/Main";
import AdminReg from "../auth/AdminRegister";
import Adminlogin from "../auth/AdminLogin";
import Homeadmin from "../pages/Homeadmin";
import Subdetails from "../pages/subpages/Subdetails";

type Props = {};

const RoutesS = (props: Props) => {
  return (
    <Routes>
      {/* <Route path="/"></Route> */}
      <Route path="/" element={<Main />}></Route>

      <Route path="/home/:id" element={<Home />}></Route>
      <Route path="/homeadmin" element={<Homeadmin />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/loginadmin" element={<Adminlogin />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/registeradmin" element={<AdminReg />}></Route>
      <Route path="/subdetails/:user" element={<Subdetails />}></Route>
    </Routes>
  );
};

export default RoutesS;
