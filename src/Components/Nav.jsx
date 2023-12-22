import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../pages/Private";
import logo from "../assets/Logo.jpg"
const Nav = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handlelogout = () => {
    LogOut();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="mr-2">
                Home
              </NavLink>
            </li>
            {user && <>
             <li>
            <NavLink to="/addtask" className="ml-2">
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasklist" className="ml-2">
              Task List
            </NavLink>
          </li>
          </>
          }
          </ul>
        </div>
        <img src={logo} className="rounded-full w-10 ml-10 h-8" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="mr-2">
              Home
            </NavLink>
          </li>
          {user && <>
             <li>
            <NavLink to="/addtask" className="ml-2">
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasklist" className="ml-2">
              Task List
            </NavLink>
          </li>
          </>
          }
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="w-10 ">
            <img src={user.photoURL} className="rounded-full" alt="" />
          </div>
        )}
        {user && (
          <h1 className="text-xl mb-2 mr-4 font-bold">{user.displayName}</h1>
        )}
        {user ? (
          <div>
            <button
              className="bg-green-400 text-white px-4 py-3  rounded-lg"
              onClick={handlelogout}
            >
              Log out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/Login">
              <button className="bg-green-400 text-white px-4 py-3  rounded-lg">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
