import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Events = () => {
  return (
    <div>
      <h2 className="title">Events</h2>
      <div className="tab">
        <NavLink className="tablink" to={""}>
          Events
        </NavLink>
        <NavLink className="tablink" to={"nextevent"}>
          Next events
        </NavLink>
        <NavLink className="tablink" to={"whonext"}>
          Who next
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Events;
