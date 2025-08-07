import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Exams = () => {
  return (
    <div>
      <h2 className="title">Exam</h2>
      <div className="tab">
        <NavLink end={true} className="tablink" to={""}>
          Exam
        </NavLink>
        <NavLink className="tablink" to={"controlwork"}>
          Control works
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Exams