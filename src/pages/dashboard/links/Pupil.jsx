import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Pupil = () => {
  return (
    <div>
      <h2 className="title">Pupil</h2>
      <div className="tab">
        <NavLink end={true} className="tablink" to={""}>
          Boys
        </NavLink>
        <NavLink className="tablink" to={"girl"}>
          Girls
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Pupil