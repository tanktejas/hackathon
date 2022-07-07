import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  const [ql, setql] = useState({ "max-height": "0px" });
  const [ns, setns] = useState({ "max-height": "0px" });
  const [is, setis] = useState({ "max-height": "0px" });
  const [rs, setrs] = useState({ "max-height": "0px" });
  const [ex, setex] = useState({ "max-height": "0px" });
  const [width, setwid] = useState(window.innerWidth);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout((element) => {}, 0);
    // alert(props.index);
  }, []);

  return (
    <>
      <footer className="footer nav-folderized">
        <div className="container ">
          <div className=" c a address-f footer-address-main">
            <div className=" b footer-adress">
              <i class="fa fa-map-marker"></i>

              {/* <h5>India</h5> */}
              <p>
                01S09 A.M.Naik house of schol, V.V.Nagar <br />
                Anand, Gujarat 380010
              </p>
            </div>
            <div className="b footer-awards">
              <h5>Contact Us</h5>
              <div class="footer-center">
                <div>
                  <i class="fa fa-phone"></i>
                  <p style={{ margin: "auto" }}>+91 6354434661</p>
                </div>
                <div>
                  <i class="fa fa-envelope"></i>
                  <p>
                    <a href="mailto:stuhelpofficial@gmail.com">
                      Stuhelpofficial@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="b footer-social home-social">
              <h5>Follow us on</h5>

              <ul class="footer-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (ql["max-height"] == "0px") {
                      setql({ "max-height": "100%" });
                    } else {
                      setql({ "max-height": "0px" });
                    }
                  }
                }}
              >
                Quick Links
              </h5>
              <ul style={width <= 987 ? ql : {}}>
                <Link to="/">
                  <li>
                    <a href="#" className="lear-more-l">
                      Home
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/login">
                  <li>
                    <a href="#" className="lear-more-l">
                      Student Login
                    </a>
                  </li>
                </Link>
                <Link to="/tlogin">
                  <li className="hiring-link blink-menu">
                    <a href="#" className="lear-more-l blink-active">
                      Teacher Login
                    </a>{" "}
                    <span className="hiring">We Are Hiring</span>
                  </li>
                </Link>
                <Link to="/About-Scholar">
                  <li>
                    <a href="#" className="lear-more-l">
                      About Us
                    </a>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <a href="#" className="lear-more-l">
                      COntact Us
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (ns["max-height"] == "0px") {
                      setns({ "max-height": "100%" });
                    } else {
                      setns({ "max-height": "0px" });
                    }
                  }
                }}
              >
                Certifited Courses
              </h5>
              <ul style={width <= 987 ? ns : {}}>
                <li>
                  <a href="#" className="lear-more-l">
                    CS/IT Core Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Web Dev. Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    App Dev. Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    communication Skills Courses
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (is["max-height"] == "0px") {
                      setis({ "max-height": "100%" });
                    } else {
                      setis({ "max-height": "0px" });
                    }
                  }
                }}
              >
                Foreign Study Helper
              </h5>
              <ul style={width <= 987 ? is : {}}>
                <Link to="/study-at-germany">
                  <li>
                    <a href="#" className="lear-more-l">
                      Study at germany
                    </a>
                  </li>
                </Link>
                <Link to="/study-at-us">
                  <li>
                    <a href="#" className="lear-more-l">
                      Study at United State
                    </a>
                  </li>
                </Link>
                <Link to="/study-at-ukrain">
                  <li>
                    <a href="#" className="lear-more-l">
                      Study at Ukraine
                    </a>
                  </li>
                </Link>
                <Link to="/study-at-canada">
                  <li>
                    <a href="#" className="lear-more-l">
                      Study at Canada
                    </a>
                  </li>
                </Link>
                <Link to="/study-at-rusia">
                  <li>
                    <a href="#" className="lear-more-l">
                      Study at Rusia
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (rs["max-height"] == "0px") {
                      setrs({ "max-height": "100%" });
                    } else {
                      setrs({ "max-height": "0px" });
                    }
                  }
                }}
              >
                Our's Compitition
              </h5>
              <ul style={width <= 987 ? rs : {}}>
                <Link to="/compihome">
                  <li>
                    <a href="#" className="lear-more-l">
                      Select * from brain
                    </a>
                  </li>
                </Link>
                <Link to="/study-at-canada">
                  <li>
                    <a href="#" className="lear-more-l">
                      Spin E Web
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/study-at-canada">
                  <li>
                    <a href="#" className="lear-more-l">
                      MoneyHeist
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/study-at-canada">
                  <li>
                    <a href="#" className="lear-more-l">
                      Maths Pirates
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/study-at-canada">
                  <li>
                    <a href="#" className="lear-more-l">
                      Bug Bunny
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (width <= 987) {
                    if (ex["max-height"] == "0px") {
                      setex({ "max-height": "100%" });
                    } else {
                      setex({ "max-height": "0px" });
                    }
                  }
                }}
              >
                Imp !!
              </h5>
              <ul style={width <= 987 ? ex : {}}>
                <Link to="/ViewAllScholarships">
                  <li>
                    <a href="#" className="lear-more-l">
                      Courses
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/compihome">
                  <li>
                    <a href="#" className="lear-more-l">
                      Compitition
                    </a>
                  </li>
                </Link>
                <br />

                <Link to="/Team">
                  <li>
                    <a href="#" className="lear-more-l">
                      Our Team
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/career">
                  <li>
                    <a href="#" className="lear-more-l">
                      Career
                    </a>
                  </li>
                </Link>
                <br />
                <Link to="/result">
                  <li>
                    <a href="#" className="lear-more-l">
                      Results
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 copy-right text-center">
            <p>
              <span>
                © 2022
                <a href="#" target="_new">
                  STUHELP
                </a>
                All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </footer>

      <script src="../js/start.js"></script>
      <script src="../js/mmenu-light.js"></script>
    </>
  );
}

export default Footer;
