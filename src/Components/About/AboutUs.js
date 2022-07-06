import React from "react";
import { Link } from "react-router-dom";

import "../main.css";

function AboutUs() {
  return (
    <div style={{ backgroundImage: 'url("pattern-bg.jpg")' }}>
      <div class="parallax about-top-slide" id="parallax">
        <div class="container">
          <div class="row">
            <div class="top-slide-con">
              <div class="col-md-12 text-left">
                <h1 class="section-title">
                  A Single Portal of <br />
                  Student Activity Management System{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container  pb-50">
        <div class="row">
          <div class="col-lg-12 col-md-12 text-left">
            <div class="about-story-con">
              <div class="soln-heading">
                <h2 class="text-left">What does our website do?</h2>
              </div>

              <p>
                Our website is helpful to all the student to learnabout new Compitition, courses and many more things. by using{" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a class="internal-links" href="#">
                    Stuhelp
                  </a>
                </Link>{" "}
                students make their future very bright and a bright future of
                students can make a developed country. Also Teacher can view and analyse student's progress and also can control the portal.
              </p>

              <p>
                Today, we are recognized under the top Student Activity Management System by renowned researching organizations and
                firms. We owe the entire credit to our keen team of designers,
                developers and strategists; who never let things go! In a single
                word,{" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a class="internal-links" href="#">
                    Stuhelp
                  </a>
                </Link>{" "}
                is all about ‘doing things innovatively’ and ‘never giving up’.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="parallax solution-main pricing-main"
        id="parallax"
        data-color="#ffffff"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-7">
              <div class="text-left food-top-content">
                <div class="pc-homeimg-main hom-hero become2 food-new-img mobile-about-img">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/What-is-a-Digital-Marketing-Strategy.png"
                    src="img/What-is-a-Digital-Marketing-Strategy.png"
                    alt="Food Delivery App Development"
                    title="Food Delivery App Development"
                    width="451"
                    height="500"
                  />
                </div>
                <h1 class="section-title mb-30 aos-init aos-animate">
                  Who We Are ?
                </h1>
                <p>
                  We are group of Student who are wilings to solve the real world problems. Currently We are working on Student Activity Management System to helps the student and teachers and in subject areas so as to enable the students, faculty, and researchers to access information and prepare well in advance and participate effectively and successfully.<br/>
                </p>

                <Link style={{ textDecoration: "none" }} to="/Team">
                  <a class=" button2 get-a-demo" href="#">
                    Meet Our Team
                  </a>
                </Link>
              </div>
            </div>
            <div class="col-xs-12 col-sm-5 col-md-5 food-top-img food-top-img-n desktop-about-img">
              <div class="become2">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/What-is-a-Digital-Marketing-Strategy.png"
                  src="img/What-is-a-Digital-Marketing-Strategy.png"
                  alt="Medicine Delivery App Development"
                  title="Medicine Delivery App Development"
                  width="451"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        class="parallax we-are-main"
        style={{ backgroundColor: "rgb(220 236 251 / 71%)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 text-left">
              <div class="soln-heading">
                <h2>Innovation meets endless opportunity At Stuhelp.</h2>
              </div>
              <p>
              We need you to develop a portal where information about all academic activities across the country, universities and international arena in chronological order and in subject areas so as to enable the students, faculty, and researchers to access information and prepare well in advance and participate effectively and successfully."
              </p>
              <a class="button2" href="#">
                Explore
              </a>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="we-are">
                <div class="col-md-12 col-sm-12 left">
                  <div class="we-are-box" style={{ padding: "30px" }}>
                    <div class="counter-box">
                      <h2 class="count">1000</h2>
                      <span>
                        <h2>+</h2>
                      </span>
                    </div>
                    <h5>Students Benefited</h5>
                  </div>
                </div>
                <div class="col-md-12 col-sm-12 right">
                  <div class="row">
                    <div
                      class="col-md-6 col-sm-6"
                      style={{
                        borderTop: "1px solid black",
                        borderRight: "1px solid black",
                        padding: "30px",
                      }}
                    >
                      <div class="we-are-box">
                        <div class="counter-box">
                          <h2 class="count">65</h2>
                          <span>
                            <h2>+</h2>
                          </span>
                        </div>
                        <h5>Teachers Connected</h5>
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-sm-6"
                      style={{ borderTop: "1px solid black", padding: "30px" }}
                    >
                      <div class="we-are-box">
                        <div class="counter-box">
                          <h2 class="count">99</h2>
                          <span>
                            <h2>%</h2>
                          </span>
                        </div>
                        <h5>Correct Information</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container pt-100">
        <div class="row">
          <div class="col-lg-12 col-md-12 text-center">
            <div class="about-story-con">
              <div class="soln-heading">
                <h2 class="text-center">Vision and Mission</h2>
              </div>

              <p>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a class="internal-links" href="#">
                    Stuhelp
                  </a>
                </Link>{" "}
                's mission is to organize scholarship information in a good
                manner and help to Student and Teacher to fulfill their requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-100">
        <div class="row">
          <div class="col-lg-12 col-md-12 text-center">
            <div class="about-story-con">
              <div class="soln-heading">
                <h2 class="text-center">Goal</h2>
              </div>

              <p>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a class="internal-links" href="#">
                   Stuhelp
                  </a>
                </Link>{" "}
                's Goal is to help 100000+ students and teachers to helps and to
                connect every organizations to expand it world wide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        class="food-client-video  home-food-client-video pb-5"
        style={{ backgroundColor: "rgb(220 236 251 / 71%)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="client-video-head text-center">
                <div class="soln-heading">
                  <h2 style={{ textAlign: "left" }}>
                    Right from the Clientele Corner!
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="testi-loding-main">
            <div class="testi-loding-box bgafter1">
              <div class="testi-loding-img">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/yash.jpg"
                  src="img/yash.jpg"
                  alt="David Koganti"
                  title="David Koganti"
                  style={{borderRadius:"50%"}}
                />
              </div>

              <p>
                <span class="quote-sign">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/quote-sign.png"
                    src="img/quote-sign.png"
                  />
                </span>
                " We have been using Stuhelp for over 3 years now.
                 We have great experience to add courses, update course, result also.We have been added and completed many compitition using stuhelp. I have a
                few more projects lined up and will be using them again. Highly
                recommended! "
              </p>
              <h5 class="testimonial-author">
                Yash Parsana - <small>Principal Of P.P.SAVANI</small>
              </h5>
            </div>
            <div class="testi-loding-box bgafter2">
              <div class="testi-loding-img">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/vivek.jpg"
                  src="img/vivek.jpg"
                  alt="Dag Gårdheim"
                  title="Dag Gårdheim"
                  style={{borderRadius:"50%"}}
                />
              </div>

              <p>
                <span class="quote-sign">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/quote-sign.png"
                    src="img/quote-sign.png"
                  />
                </span>
                " The app has seen a substantial profit. Stuhelp was a
                particularly valuable partner during the ideation phase,
                offering advice and sharing honest opinions about the student activities.
                The team's straight-forward communication style complements
                their excellent technical skills. "
              </p>
              <h5 class="testimonial-author">
                Vivek Baldaniya - <small>(Director)</small>
              </h5>
            </div>
            <div class="testi-loding-box bgafter1">
              <div class="testi-loding-img">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/2.jpg"
                  src="img/2.jpg"
                  alt="Omar"
                  title="Omar"
                  style={{borderRadius:"50%"}}
                />

              </div>

              <p>
                <span class="quote-sign">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/quote-sign.png"
                    src="img/quote-sign.png"
                  />
                </span>
                " Great Guys to work with! Always listened to what I instructed
                and came up with innovative design ideas. Prompt communication
                and the dedicated team made the entire project very easy on our
                part. No second thoughts about hiring them for future projects.
                "
              </p>
              <h5 class="testimonial-author">
               Kavya - <small>HOD of Science</small>
              </h5>
            </div>
            <div class="testi-loding-box">
              <div class="testi-loding-img">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/kush.jpg"
                  src="img/kush.jpg"
                  alt="Jason"
                  title="Jason"
                  style={{borderRadius:"50%"}}
                />
              </div>

              <p>
                <span class="quote-sign">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/quote-sign.png"
                    src="img/quote-sign.png"
                  />
                </span>
                " Working with Stuhelp has been a great experience. They have
                helped me with my first year in school and have been very
                professional and responsive to my needs. Even when i needed to
                alter my initial plans for the app, they were understanding and
                had the skillset needed to accommodate my request. I would
                highly recommend them to anyone who is looking to have a great
                application built. "
              </p>
              <h5 class="testimonial-author">
                Kushang - <small>Science Teacher</small>
              </h5>
            </div>
          </div>
        </div>
        <div class="container ">
          <div className=" col-md-12 ml-0 ml-lg-3 my-2 my-lg-0 text-center">
            <a className=" button2 " href="#">
              view more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
