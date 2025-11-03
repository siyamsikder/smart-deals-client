import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/" className="text-base font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allProducts" className="text-base font-medium">
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/myProducts" className="text-base font-medium">
          My Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/myBids" className="text-base font-medium">
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink to="/createProduct" className="text-base font-medium">
          Create Product
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>

        <NavLink to="/" className="btn btn-ghost text-xl font-bold">
          Smart<span className="text-primary">Deals</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="rounded-full w-10 h-10 border border-gray-200"
        />
      </div>
    </div>
  );
};

export default Navbar;
