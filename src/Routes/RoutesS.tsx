import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../pages/Home";
import Main from "../pages/Main";
import AdminReg from "../auth/AdminRegister";
import Adminlogin from "../auth/AdminLogin";
import Homeadmin from "../pages/Homeadmin";
import Subdetails from "../pages/subpages/Subdetails";
import Notfound from "../pages/Notfound";

type Props = {};

const RoutesS = (props: Props) => {
  const [authenticated, setautheticated] = useState<boolean>(false);
  const [authenticatedadmin, setautheticatedadmin] = useState<boolean>(false);

  return (
    <Routes>
      {/* <Route path="/"></Route> */}
      <Route path="/" element={<Main />}></Route>

      <Route
        path="/home/:id"
        element={authenticated ? <Home /> : <Navigate to="/login" />}
      ></Route>
      <Route
        path="/homeadmin"
        element={
          authenticatedadmin ? <Homeadmin /> : <Navigate to="/loginadmin" />
        }
      ></Route>
      <Route
        path="/login"
        element={<Login setautheticated={setautheticated} />}
      ></Route>
      <Route
        path="/loginadmin"
        element={<Adminlogin setautheticatedadmin={setautheticatedadmin} />}
      ></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/registeradmin" element={<AdminReg />}></Route>
      <Route path="/subdetails/:user" element={<Subdetails />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
};

export default RoutesS;
