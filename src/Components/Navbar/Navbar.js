import React from "react";
import "./Navbar.css";
import logo from "./sih2020-logo.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import url from "../Navbar/sih2020-logo.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Close";
//Pages
function NavBar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [click, setClick] = React.useState(false);
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [navicon, setnav] = useState({ display: "none" });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 fixed-top">
      <div className="container">
        <NavLink to="#" className="navbar-brand">
          <img
            className="logo"
            src="https://www.sih.gov.in/img1/SIH2022-white-logo.png"
          ></img>
        </NavLink>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          onClick={() => {
            if (navicon.display == "none") setnav({ display: "Block" });
            else setnav({ display: "none" });
          }}
        > */}
        {/* <span className="navbar-toggler-icon"></span> */}
        <div
          className="togglebut"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          {navicon.display == "none" && (
            <MenuIcon
              onClick={() => {
                if (navicon.display == "none") setnav({ display: "block" });
                else setnav({ display: "none" });
                console.log(navicon);
              }}
            />
          )}
          {navicon.display != "none" && (
            <ClearIcon
              onClick={() => {
                if (navicon.display == "none") setnav({ display: "Block" });
                else setnav({ display: "none" });
              }}
            />
          )}
        </div>
        {/* </button> */}

        <div className="collapse navbar-collapse" id="navmenu" style={navicon}>
          <ul className="navbar-nav ms-auto navigation">
            <li className="nav-item">
              <NavLink to="#home" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="#services" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="#about" className="nav-link">
                Q&A
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="#questions" className="nav-link">
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="#Instructors" className="nav-link">
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="#contact" className="nav-link">
                Admin Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
