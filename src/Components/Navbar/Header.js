import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";

import "./plugins.min.css";

function Header() {
  const [navicon, setnav] = useState({ display: "none" });
  const [scho, setscho] = useState({ display: "none" });
  const [cont, setcont] = useState({ display: "none" });

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
                      <a className="nav-link active " href="#!">
                        Home
                      </a>
                    </li>

                    <li
                      className="nav-item dropdown"
                      onClick={() => {
                        if (scho.display == "none")
                          setscho({ display: "block" });
                        else setscho({ display: "none" });
                      }}
                    >
                      <a
                        className="nav-link  dropdown-toggle"
                        href="#!"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Scholarships
                      </a>

                      <div
                        className="dropdown-menu  "
                        aria-labelledby="navbarDropdown"
                        style={scho}
                      >
                        {/* <div className="row no-gutters distinct">
                        <div className="col-lg-6"> */}
                        <a href="#" className=" dropdown-item">
                          National Scholarship
                        </a>

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
                      <a className="nav-link  " href="#!">
                        Q&A
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link  " href="#!">
                        About Us
                      </a>
                    </li>

                    <li
                      className="nav-item dropdown"
                      onClick={() => {
                        if (cont.display == "none")
                          setcont({ display: "block" });
                        else setcont({ display: "none" });
                      }}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="##!"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Contact
                      </a>
                      <div
                        className="dropdown-menu dropdown-column"
                        aria-labelledby="navbarDropdown"
                        style={cont}
                      >
                        <div className="row no-gutters">
                          <div className="col-lg-6">
                            <a className="dropdown-item" href="#">
                              Team
                            </a>
                            <a className="dropdown-item" href="#">
                              Services
                            </a>
                            <a className="dropdown-item" href="#">
                              Partners
                            </a>
                            <a className="dropdown-item" href="#">
                              Case Stydy
                            </a>
                          </div>
                          <div className="col-lg-6">
                            <a className="dropdown-item" href="#">
                              Purpose
                            </a>
                            <a className="dropdown-item" href="#">
                              FAQ
                            </a>
                            <a className="dropdown-item" href="#">
                              Error 404
                            </a>
                            <a className="dropdown-item" href="#">
                              Privacy &amp; Policy
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Admin Login
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* 
      <script src=
"./js/custome.js" 
    type="text/javascript" />
    <script src=
"./js/app.js" 
    type="text/javascript" />

      <script src="./js/jquery-3.4.1.min.js"></script>
      <script src="./js/plugins.min.js"></script> */}
    </>
  );
}

export default Header;
