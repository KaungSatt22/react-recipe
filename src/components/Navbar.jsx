import React from "react";
import { MdRamenDining, MdFoodBank } from "react-icons/md";
import { GiChopsticks, GiHamburger, GiHotSpices } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
const Navbar = () => {
  return (
    <div>
      <Searchbar />
      <nav className="flex items-center justify-center gap-5 lg:gap-[5rem] my-20 px-2">
        <div className="flex flex-col items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "rounded-full border-2 inline-block p-2 bg-black text-white "
                : "rounded-full border-2 inline-block p-2"
            }
          >
            <MdFoodBank size={35} />
          </NavLink>
          <p>Home</p>
        </div>
        <div className="flex flex-col items-center">
          <NavLink
            to="/cuisine/Japanese"
            className={({ isActive }) =>
              isActive
                ? "rounded-full border-2 inline-block p-2 bg-black text-white "
                : "rounded-full border-2 inline-block p-2"
            }
          >
            <MdRamenDining size={35} />
          </NavLink>
          <p>Japanese</p>
        </div>
        <div className="flex flex-col items-center">
          <NavLink
            to="/cuisine/Chinese"
            className={({ isActive }) =>
              isActive
                ? "rounded-full border-2 inline-block p-2 bg-black text-white "
                : "rounded-full border-2 inline-block p-2"
            }
          >
            <GiChopsticks size={35} />
          </NavLink>
          <p>Chinese</p>
        </div>
        <div className="flex flex-col items-center">
          <NavLink
            to="/cuisine/American"
            className={({ isActive }) =>
              isActive
                ? "rounded-full border-2 inline-block p-2 bg-black text-white "
                : "rounded-full border-2 inline-block p-2"
            }
          >
            <GiHamburger size={35} />
          </NavLink>
          <p>American</p>
        </div>
        <div className="flex flex-col items-center">
          <NavLink
            to="/cuisine/Thai"
            className={({ isActive }) =>
              isActive
                ? "rounded-full border-2 inline-block p-2 bg-black text-white "
                : "rounded-full border-2 inline-block p-2"
            }
          >
            <GiHotSpices size={35} />
          </NavLink>
          <p>Thai </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
