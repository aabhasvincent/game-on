import * as React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import Logo from "../../public/logo/names.png";
export const Header = () => {
  const { user, dispatch } = useAuthContext();

  return (
    <div className="flex justify-between items-center flex-wrap h-16 px-6">
      <div className="flex justify-start flex-grow-1 items-center">
        <Link
          to="/"
          className="mr-6 text-white hover:text-blue-800 active:text-blue-300"
        >
          <img
            src={Logo}
            alt="fireSpot"
            style={{ height: 35, width: 100, marginRight: 15 }}
          />
        </Link>
        {(user?.email || true) && (
          <Link
            to="names"
            className="mr-6 text-white hover:text-blue-800 active:text-blue-300"
          >
            Gane On!
          </Link>
        )}
      </div>
      <div className="flex justify-end flex-grow-1">
        <Link
          to="register"
          className="mr-6 text-white hover:text-blue-800 active:text-blue-300"
        >
          Register
        </Link>
        <Link
          to="slotbooking"
          className="mr-6 text-white hover:text-blue-800 active:text-blue-300"
        >
          Book Slots
        </Link>
        <Link
          to="aboutus"
          className="mr-6 text-white hover:text-blue-800 active:text-blue-300"
        >
          About Us
        </Link>
        {!user?.email && (
          <Link
            to="login"
            className="mr-6 text-white hover:text-blue-800 active:text-blue-300"
          >
            Login
          </Link>
        )}
        {user?.email && (
          <Link
            to=""
            className="mr-6 text-white hover:text-blue-800 active:text-blue-300"
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              localStorage.clear();
            }}
          >
            Logout || {user?.email}
          </Link>
        )}
      </div>
    </div>
  );
};
