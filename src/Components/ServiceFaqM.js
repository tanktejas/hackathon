import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
import "./main.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./plugins.min.css";
import Accordion from "react-bootstrap/Accordion";

function ServiceFaqM() {
  return (
    <>
      <div class="wrapper faq-wrapper pt-10">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-title mb-40">
                <span class="text-marked">Frequently Asked</span> Questions_
              </h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <Accordion defaultActiveKey={["0"]} alwaysOpen flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    How much time does it take to develop a Hybrid application project?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        The time of the{" "}
                        <a
                          class="internal-links"
                          href="Android-app-development.shtml"
                        >
                          Android app development
                        </a>{" "}
                        depends on the following:
                      </p>
                      <p>
                        - Customised required for the application during the
                        development.
                      </p>{" "}
                      <p>
                        - Designing part and its importance for the application.
                      </p>
                      <p>- Size of the project/application.</p>{" "}
                      <p>
                        - Advanced features if there are any to be included.
                      </p>
                      <p>
                        - Understanding and consent of the project evaluation
                        from both the parties.
                      </p>
                      <p>- Medium-sized project (5-8 weeks).</p>
                    </div>
                    {/* <!-- <div class="bg-soft-green rounded-lg border px-4 py-3 mt-20">You’ll be sent a confirmation email to verify you so make sure you check your email.</div> --> */}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How to hire a dedicated team or developer for my Android
                    project?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>- Share your requirements online or via Skype.</p>
                      <p>
                        - Talk to our business development head for the hiring
                        process.
                      </p>
                      <p>
                        - We will make you talk to the head of the Android
                        department.
                      </p>
                      <p>- Discuss initial project details.</p>
                      <p>
                        - Hire team or developer (signing NDA is compulsory).
                      </p>
                      <p>
                        - Choose from the hiring plan (hourly, daily, weekly).
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Will the dedicated offshore developer work only on my
                    project?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        Of course, if you have hired a particular team or
                        developer for your project, it will surely be dedicated
                        to your brand unless the project is delivered.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How will be the communication process after hiring the
                    developer/team?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        Hey, we live in the digital era! Communication is just a
                        swipe away! Developers will be available on Skype and
                        Whatsapp during the working hours/days for answering all
                        your queries.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Can I handle the entire team myself as I am the Chief
                    Technical Officer ( CTO)?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        100% if you want to do that, you can. In any case, if
                        you are not able to dedicate time, we have experienced
                        technicians to take care of the same.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Will I be able to change any developer/team, if I am not
                    satisfied with it?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. You will have that authority. And the client’s
                    satisfaction is as important to us as the quality of Hybrid
                    app development. We are here to deliver the best{" "}
                    <a
                      class="internal-links"
                      href="Android-app-development.shtml"
                    >
                      Android app development
                    </a>{" "}
                    service and output.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Android Development Team or Single Developer, What is the
                    best choice?
                  </Accordion.Header>
                  <Accordion.Body>
                    Teamwork is always better than single hand creativity.
                    Though we always take care while hiring our employees, and
                    it is in our best interest to employ experience and
                    excellent Android developers. Still, a team always makes the
                    best output as more brains are working on a similar project.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    What is the Average cost of developing an Android
                    Application with cscodetech?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        There are few factors that determine the cost of
                        developing an Android Application.
                      </p>
                      <p>- Size of the Android App project.</p>
                      <p>
                        - Advanced features of the development if any included.
                      </p>
                      <p>
                        - Time and skills required for the project to be
                        accomplished.
                      </p>{" "}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    How well experienced are the developers who shall be working
                    on my project?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        The average years of experience at CSCODETECH in the
                        Hybrid application development is 4.5-7 years. Our
                        developers are well versed with the latest technology
                        and tools. They are trained and well-equipped with
                        digital platforms that they are expert of.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceFaqM;
