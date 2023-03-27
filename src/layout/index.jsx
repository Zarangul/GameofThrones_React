import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

function Layout({setAuth}) {
  return (
    <>
      <Navbar setAuth={setAuth}/>
      <Outlet />
    </>
  );
}

export default Layout;
