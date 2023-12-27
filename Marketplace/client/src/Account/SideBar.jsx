// import "./NavBar.css";
import React from "react";
import "./side.css"
import { Link, useLocation} from "react-router-dom";

export default function SideBar() {
  const location = useLocation()
  return (
    <div className="side"> 
    <div className="manage-my-account">Manage My Account</div>
      <div className="my-orders">My Orders</div>
      <div className="my-wishlist"><Link
                className={`link ${
                  location.pathname === "/wishList" ? "active" : ""
                }`}
                to="/wish"
              >
                My WishList
              </Link></div>
      <div className="my-profile-parent">
        <div className="my-profile"><Link
                className={`link ${
                  location.pathname === "/account" ? "active" : ""
                }`}
                to="/account">
                My Profile
              </Link></div>
        <div className="address-book">Address Book</div>
        <div className="address-book">My Payment Options</div>
      </div>
      <div className="my-returns-parent">
        <div className="address-book" ><Link
                className={`link ${
                  location.pathname === "/create" ? "active" : ""
                }`}
                to="/create"
              >
                Add Product
              </Link> </div>
              
        <div className="address-book">My Cancellations</div>
      </div>
      
      </div>
  );
}
