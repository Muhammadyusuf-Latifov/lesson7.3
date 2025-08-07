import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const School = () => {
  return (
    <div>
      <h2 className="title">School</h2>
      <div className="tab">
        <NavLink  className="tablink" to={""}>
          School news
        </NavLink>
        <NavLink className="tablink" to={"schoolperiod"}>
          School period
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default School;
