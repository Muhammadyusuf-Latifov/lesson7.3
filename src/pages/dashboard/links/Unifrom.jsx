import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Unifrom = () => {
  return (
    <div>
      <h2 className="title">Uniform</h2>
      <div className="tab">
        <NavLink end={true} className="tablink" to={""}>
          Boys uniform
        </NavLink>
        <NavLink className="tablink" to={"girluniform"}>
          Girls uniform
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Unifrom