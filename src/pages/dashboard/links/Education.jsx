import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Education = () => {
  return (
    <div>
      <h2 className="title">Education</h2>
      <div className="tab">
        <NavLink className="tablink" to={""}>
          Lessons
        </NavLink>
        <NavLink className="tablink" to={"break"}>
          Breaks
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Education