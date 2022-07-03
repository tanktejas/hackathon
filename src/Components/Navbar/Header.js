import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { logcont } from "../logincontext/authcontext";

import "../main.css";

import "./plugins.min.css";

function Header() {
  const [navicon, setnav] = useState({ display: "none" });
  const [scho, setscho] = useState({ display: "none" });
  const [cont, setcont] = useState({ display: "none" });
  const { user, logout } = useContext(logcont);
  const [curruser, setuser] = useState(user == "no" ? null : user);

  // for admin logout
  const Logout = () => {
    console.log("ok");
    logout()
      .then((ok) => {
        setuser(null);
      })
      .catch((err) => {
        alert(err);
      });
  };

  console.log(user);

  return (
    <>
      <header className="grip-header sticky">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link style={{ textDecoration: "none" }} to="/">
                  <a className="navbar-brand" href="#index.php">
                    {/* <img
            className="logo"
            src="https://www.sih.gov.in/img1/SIH2022-white-logo.png"/> */}
                    <span>
                      <i class="fab fa-speakap"></i>
                    </span>
                    <span>SCHOLARS</span>
                  </a>
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navTrigger"
                  aria-controls="navTrigger"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => {
                    if (navicon.display == "none") setnav({ display: "block" });
                    else setnav({ display: "none" });
                  }}
                >
                  <span className="show fe fe-menu"></span>
                  <span className="hidden fe fe-x"></span>
                </button>

                <div
                  className="collapse navbar-collapse spec"
                  id="navTrigger"
                  style={navicon}
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>

                    <li
                      className="nav-item dropdown"
                      onClick={() => {
                        if (scho.display == "none")
                          setscho({ display: "block" });
                        else setscho({ display: "none" });
                      }}
                    >
                      <NavLink
                        className="nav-link  dropdown-toggle"
                        to="/ViewAllScholarships"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Scholarships
                      </NavLink>

                      <div
                        className="dropdown-menu  "
                        aria-labelledby="navbarDropdown"
                        style={scho}
                      >
                        {/* <div className="row no-gutters distinct">
                        <div className="col-lg-6"> */}
                        <NavLink
                          to="/ViewAllScholarships"
                          className=" dropdown-item"
                        >
                          National Scholarship
                        </NavLink>

                        <a href="#" className="dropdown-item">
                          Govrnment Scholarship
                        </a>

                        <a href="#" className="dropdown-item">
                          Private Scholarship
                        </a>

                        <a href="#" className="dropdown-item">
                          Compititive Exam based scolarship
                        </a>

                        <a href="#" className="dropdown-item">
                          Foreign Study based Scholarships
                        </a>

                        <a href="#" className="dropdown-item">
                          Indian Research Scholarship
                        </a>

                        <a href="#" className="dropdown-item">
                          Foreign Research Scolarship
                        </a>
                      </div>

                      {/* </div>
                    </div> */}
                    </li>

                    <li className="nav-item ">
                      <a className="nav-link  " href="/">
                        Q&A
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/About-Scholar"
                      >
                        <a className="nav-link" href="#!">
                          About Us
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <NavLink className="nav-link " to="/contact">
                        Contact
                      </NavLink>
                    </li>
                    {!curruser && (
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                          Admin Login
                        </NavLink>
                      </li>
                    )}
                    {curruser && (
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/form">
                          Data Form
                        </NavLink>
                      </li>
                    )}
                    {curruser && (
                      <li className="nav-item">
                        <button
                          onClick={() => {
                            Logout();
                          }}
                        >
                          logout
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
