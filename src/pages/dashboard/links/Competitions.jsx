import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Competitions = () => {
  return (
    <div>
      <h2 className="title">Competition</h2>
      <div className="tab">
        <NavLink end={true} className="tablink" to={""}>
          Match
        </NavLink>
        <NavLink className="tablink" to={"whowon"}>
          Who won
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Competitions