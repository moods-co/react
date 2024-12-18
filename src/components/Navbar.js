import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

import SearchBar from "./SearchBar";
import ThemeDropdown from "./ThemeDropdown";

function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed w-full z-20 top-0 start-0">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-black gap-px">
            M
            <Icon icon="ph:leaf-fill" />
            <Icon icon="ph:fire-fill" />
            D
        </Link>
      </div>
      <div className="navbar-center">
        <SearchBar/>
    </div>
    <div className="navbar-end">
      <ThemeDropdown />
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between" to="/profile">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
