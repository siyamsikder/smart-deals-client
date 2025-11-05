import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import HeroSection from "../Pages/HeroSection";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
        toast.success("You logged out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-base font-medium hover:text-primary transition">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProducts"
          className="text-base font-medium hover:text-primary transition">
          All Products
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/myProducts"
              className="text-base font-medium hover:text-primary transition">
              My Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBids"
              className="text-base font-medium hover:text-primary transition">
              My Bids
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createProduct"
              className="text-base font-medium hover:text-primary transition">
              Create Product
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-white shadow-md fixed top-0 left-0 right-0 z-50 px-4 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]">
            SmartDeals
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end flex items-center space-x-3">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                Register
              </NavLink>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <img
                src={user.photoURL || "https://i.pravatar.cc/40"}
                alt="User Avatar"
                className="rounded-full w-10 h-10 border border-gray-200"
              />
              <button
                onClick={handleSignOut}
                className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default Navbar;
