import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { AiOutlineMenu } from "react-icons/ai";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { HelpOutline } from "@mui/icons-material";
import { auth } from "./firebase";
import Search from "./Search";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      }
  };
  return (
    <div>
    <div className="header">
      <Link to="/">
        {/* <img className="header_logo" src="pngimg.com - amazon_PNG11.png" /> */}
        <span className="header_logo">Shoppe</span>
      </Link>
      
      <Link to={!user && "/login"}>
        <div className="header_nav">
          <div onClick={handleAuthentication} className="header_option">
            <div className="header_option_l1">
              <span>Hello {user?.email}</span>
            </div>
            <div className="header_option_l2">
              <span>{user ? "Sign Out" : "Sign In"}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="header_nav">
        <div className="header_option">
          <div className="header_option_l1">returns</div>
          <div className="header_option_l2">&orders</div>
        </div>
      </div>
      {/* <div className="header_nav">
        <div className="header_option">
          <div className="header_option_l1">your</div>
          <div className="header_option_l2">prime</div>
        </div>
      </div> */}
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="header_option_l2 header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
      <Search/>
      </div>
    </div>
    
  );
}

export default Header;
