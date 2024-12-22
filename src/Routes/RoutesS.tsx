import { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../pages/Home";
import Main from "../pages/Main";
import AdminReg from "../auth/AdminRegister";
import Adminlogin from "../auth/AdminLogin";
import Homeadmin from "../pages/Homeadmin";
import Subdetails from "../pages/subpages/Subdetails";
import Notfound from "../pages/Notfound";

import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const RoutesS = () => {
  const loc = useLocation().pathname.split("/")[2];

  console.log(loc);

  const ActiveUsers = useSelector((state: RootState) => state.log.active);

  const CurrentUsers = useSelector(
    (state: RootState) => state.log.currentActiveUser
  );

  const ActiveUserFound = ActiveUsers.find((abc) => abc.email === CurrentUsers);
  const FromLocation = ActiveUsers.find((abc) => abc.email === loc);

  const selectoradmin = useSelector(
    (state: RootState) => state.log.adminactive
  );

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>

      <Route
        path="/home/:id"
        element={
          ActiveUserFound && FromLocation ? <Home /> : <Navigate to="/login" />
        }
      ></Route>
      <Route
        path="/homeadmin"
        element={selectoradmin ? <Homeadmin /> : <Navigate to="/loginadmin" />}
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/loginadmin" element={<Adminlogin />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/registeradmin" element={<AdminReg />}></Route>
      <Route path="/subdetails/:user" element={<Subdetails />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
};

export default RoutesS;
