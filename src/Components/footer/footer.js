import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <img src="https://www.sih.gov.in/img1/SIH2022-white-logo.png"></img>
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Scholarship</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Scholar © 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>444 S. V.V. Nagar</span> Anand,India
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+913232323232</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">Scholar@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About Scholar</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
