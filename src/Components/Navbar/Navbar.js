import React from "react";
import "./Navbar.css";
import logo from "./sih2020-logo.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//Pages
function NavBar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [click, setClick] = React.useState(false);
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            {/* Gallery

            <i className="fa fa-gallery"></i>
            <i class="fa-brands fa-phoenix-squadron"></i> */}
            <img src={logo}></img>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Scholarship
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            {!isAuthenticated && (
              <li className="nav-item losi">
                <NavLink
                  exact
                  to="/log-in"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => {
                    loginWithRedirect();
                  }}
                >
                  Log-in
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item losi">
                <NavLink
                  exact
                  to="/log-in"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => logout()}
                >
                  Log-out ({user.nickname})
                </NavLink>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item losi">
                <NavLink
                  exact
                  to="/Sign-in"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => loginWithRedirect()}
                >
                  Sign-in
                </NavLink>
              </li>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
function Navbar() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default Navbar;
