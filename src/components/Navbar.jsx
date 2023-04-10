import React, { useState } from "react";
import { navLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { FaSearch } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import NavSearchbar from "./NavSearchbar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-white "
      : "text-dimWhite hover:text-secondary transition-all duration-500";

  return (
    <div className="relative">
      <nav className="flex flex-row items-center justify-between container py-6">
        <Link to="/">
          <span className="text-gradient text-2xl tracking-wide font-bold ">
            Cinemagic
          </span>
        </Link>
        <ul className="md:flex flex-row items-center justify-center hidden">
          {navLinks.map((link, index) => (
            <li key={index} className="mr-6 ">
              <NavLink to={`${link.to}`} className={activeLink}>
                {link.name}
              </NavLink>
            </li>
          ))}
          {/* 
        <Link to="/discover">
          <li className="bg-blue-gradient text-primary font-semibold px-4 rounded-md py-3 hover:scale-110 transition-all duration-500">
            Discover
          </li>
        </Link> */}

          <li className="flex flex-col items-center">
            <button onClick={() => setSearchToggle(!searchToggle)}>
              {searchToggle ? (
                <CgClose className="text-secondary text-xl" />
              ) : (
                <FaSearch className="text-secondary text-xl" />
              )}
            </button>
          </li>
        </ul>
        <div className="md:hidden flex">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer object-contain w-6 h-6"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 sm:right-8  mx-4 my-2 min-w-[140px] rounded-xl z-50`}
          >
            <ul className="flex items-start flex-1 flex-col justify-center ">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="mb-2"
                  onClick={() => setToggle(!toggle)}
                >
                  <NavLink
                    to={`${link.to}`}
                    className={({ isActive }) =>
                      isActive ? "text-white" : "text-dimWhite"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              <li onClick={() => setToggle(!toggle)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-dimWhite"
                  }
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <NavSearchbar
        searchToggle={searchToggle}
        setSearchToggle={setSearchToggle}
      />
    </div>
  );
};

export default Navbar;
