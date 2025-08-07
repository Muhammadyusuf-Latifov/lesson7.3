import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Achievement = () => {
  return (
    <div>
      <h2 className="title">Competition</h2>
      <div className="tab">
        <NavLink className="tablink" to={""}>
          Winner
        </NavLink>
        <NavLink className="tablink" to={"knowledge"}>
          Knowledge
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Achievement