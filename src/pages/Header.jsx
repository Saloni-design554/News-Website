import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
           {/* <!-- Header --> */}
      <header>
      {/* Header Desktop */}
      <div className="container-menu-desktop">
        <div className="topbar">
          <div className="content-topbar container h-100">
            <div className="right-topbar">
              <span className="right-topbar-item flex-wr-s-c">
                <span>New York, NY</span>
                <img
                  className="m-b-1 m-rl-8"
                  src="assets/images/icons/icon-night.png"
                  alt="Weather Icon"
                />
                <span>HI 58° LO 56°</span>
              </span>
              {/* <a href="#" className="right-topbar-item">
                About
              </a> */}
              <Link to="/" className="right-topbar-item">About</Link>
              {/* <a href="#" className="right-topbar-item">
                Contact
              </a> */}
              <Link to="/" className="right-topbar-item">Contact</Link>
              {/* <a href="#" className="right-topbar-item">
                Sign up
              </a> */}
              <Link to="/" className="right-topbar-item">Sign up</Link>
              {/* <a href="#" className="right-topbar-item">
                Log in
              </a> */}
              <Link to="/" className="right-topbar-item">Log in</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
          <button aria-label="Open Mobile Menu" className="hamburger-box">
            <span className="hamburger-inner"></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <nav className="menu-mobile">
        <ul className="left-topbar">
          <li>
            {/* <a href="#" className="left-topbar-item">
              About
            </a> */}
            <Link to="/" className="left-topbar-item">About</Link>
          </li>
          <li>
            {/* <a href="#" className="left-topbar-item">
              Contact
            </a> */}
             <Link to="/" className="left-topbar-item">Contact</Link>
          </li>
          <li>
            {/* <a href="#" className="left-topbar-item">
              Sign up
            </a> */}
            <Link to="/" className="left-topbar-item">Sign up</Link>
          </li>
          <li>
            {/* <a href="#" className="left-topbar-item">
              Log in
            </a> */}
            <Link to="/" className="left-topbar-item">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
</>
    );
};

export default Header;