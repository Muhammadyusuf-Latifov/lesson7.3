import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Teacher = () => {
  return (
    <div>
      <h2 className="title">Teacher</h2>
      <div className="tab">
        <NavLink end={true} className="tablink" to={""}>
          Level
        </NavLink>
        <NavLink className="tablink" to={"informationteacher"}>
          Information
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Teacher