import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-3 bg-cyan-950">
      <div>
        <Link to="/" className="text-3xl text-white">
          ShopHub
        </Link>
      </div>
      <div className="space-x-6 text-white">
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart</Link>
      </div>

      {user ? (
        <div className="relative">
          {/* <Link to="/auth">
            <button className="btn btn-secondary">Logout</button>
          </Link> */}
          <button onClick={() => setOpen(!open)}>
            <FaRegUserCircle size={40} color="white" />
          </button>

          {open && (
            <div className="absolute right-0 mt-6 w-48 bg-white rounded-xl shadow-lg overflow-hidden">
              <ul className="py-2 text-black">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>

                <li
                  className="px-4 py-2 hover:bg-red-100 text-red-500 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/auth">
            <button className="btn btn-secondary">Login</button>
          </Link>
          <Link to="/auth">
            <button className="btn btn-primary">Signup</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
