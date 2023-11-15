import { LOGO_URL } from "../Utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
import userContext from "../Utils/userContext";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(userContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between bg-blue-300 text-white shadow-lg p-3">
     <div className="logo-container">
      <Link to="/">
        <img className="w-32" src={LOGO_URL} alt="Company logo" />
      </Link>
    </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link className="text-white hover:text-gray-300" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="text-white hover:text-gray-300" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="text-white hover:text-gray-300" to="/contact">
              Contact Us
            </Link>
          </li>
          {/* <li className="px-4">
            <Link className="text-white hover:text-gray-300" to="/grocery">
              Grocery
            </Link>
          </li> */}
          <li className="px-4 font-bold text-xl">
            <Link className="text-white hover:text-gray-300" to="/cart">
              Cart - ({cartItems.length} items)
            </Link>
          </li>
          <button
            className="login bg-white text-blue-500 px-4 py-2 rounded-lg ml-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold border-red-300">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
