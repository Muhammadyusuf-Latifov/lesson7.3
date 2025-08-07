import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Classroom = () => {
  return (
    <div>
      <h2 className="title">Exam</h2>
      <div className="tab">
        <NavLink className="tablink" to={""}>
          Number of classrooms
        </NavLink>
        <NavLink className="tablink" to={"englishclassroom"}>
         English classrooms
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Classroom