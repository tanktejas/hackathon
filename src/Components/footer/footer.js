import React from "react";
import "./footer.css";
import "../main.css";

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

        <div className="footer-bottom pb-70 ">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-md-12">
                    <p className="text-muted small text-center">&copy; 2022. All rights reserved. Designed and developed by <a href="#!" className="line-link">Scholars</a></p>
                    {/* <p className="text-center mt-2"><img src="img copy/dmca.png" /></p> */}
                    <p className="text-muted small mt-10">Trademark Legal Notice : All product names, trademarks and registered trademarks are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names,trademarks and brands does not imply endorsement.
</p><p className="text-muted small mt-2 text-center">Made with ❣️ by Mindbenders</p>
                </div>
            </div>
        </div>

    {/* <script src=
"./js/custome.js" 
    type="text/javascript" />
    <script src=
"./js/app.js" 
    type="text/javascript" /> */}
 
        <a href="#top" className="scroll-to-anim scroll-top text-white rounded-circle text-center"><span className="fe fe-chevron-up"></span></a>
   
    </div>

      </footer>

      {/* <script src="js/custome.js" type="text/javascript" />
      <script src="js/app.js" type="text/javascript" />
      <script src="js/jquery-3.4.1.min.js"></script>
      <script src="js/plugins.min.js"></script> */}
    </>
  );
}

export default Footer;
