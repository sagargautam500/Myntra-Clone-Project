import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { RiChatHeartLine } from "react-icons/ri";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const BagItems = useSelector((state) => state.bags);
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="/images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link className="nav_link" to="/">
            Men
          </Link>
          <Link className="nav_link" to="/">
            Women
          </Link>
          <Link className="nav_link" to="/">
            Kids
          </Link>
          <Link className="nav_link" to="/">
            Home & Living
          </Link>
          <Link className="nav_link" to="/">
            Beauty
          </Link>
          <Link className="nav_link" to="/">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <Link to="/profile" className="action_container">
            {user ? (
              <div className="user-info">
                {user.profilePhoto && (
                  <img
                    src={user.profilePhoto}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                )}
                <p>{user.name}</p>
              </div>
            ) : (
              <><IoPersonCircle /><span className="action_name">Profile</span></>
            )}
          </Link>

          <div className="action_container">
            <RiChatHeartLine />
            <span className="action_name">Wishlist</span>
          </div>

          <Link to="/bags" className="action_container">
            {" "}
            {/* Fixed path */}
            <IoBagHandle />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{BagItems.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
