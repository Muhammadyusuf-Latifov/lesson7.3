import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LINKS } from "../../static";
import { FaSchool } from "react-icons/fa6";
import user from "../../assets/user.jpeg"
const Dashboard = () => {
  return (
    <>
      <div className="flex ">
        <div className="w-[300px] sticky top-0 p-[20px] left-0 h-screen bg-[#373a46] ">
          <h2 className="text-[26px] font-medium text-white">Dashboard</h2>
          <div className="mt-[10px]">
            <ul className="flex flex-col gap-[7px] ">
              <li>
                <NavLink
                  end={true}
                  className="link flex items-center gap-[10px]"
                  to={"/"}
                >
                  <div>
                    <FaSchool />
                  </div>
                  <span className="bos">School</span>
                </NavLink>
              </li>
              {LINKS?.map((item, inx) => (
                <li key={inx}>
                  <NavLink
                    className="link  flex items-center gap-[10px]"
                    to={`${item.title.toLowerCase()}`}
                  >
                    <div>
                      <item.icon />
                    </div>
                    <p className="inline">{item.title}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="h-[70px] bg-[#373a46] w-[100%] sticky top-0 left-0 flex items-center justify-between pr-[30px]">
            <h2 className="text-[22px] text-[#fff] ">Your name</h2>
            <div className="flex items-center gap-[20px]">
              <p className="text-[#fff]">Your name</p>
              <div>
                <img
                  className="block w-[40px] h-[40px] rounded-[50%] object-cover"
                  src={user}
                  alt=""
                />
              </div>
            </div>
          </div>

          {<Outlet />}
        </div>
      </div>
    </>
  );
};

export default React.memo(Dashboard);
