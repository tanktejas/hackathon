import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
// import "./main.css";

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
                <Accordion.Item eventKey="19">
                  <Accordion.Header>
                    {" "}
                    As Student in when my final registration done from teacher side?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        The time of the course regisration is depends on the following:
                      </p>
                      <p>- Atleast first deadline completed</p>{" "}
                      <p>
                        - After Deadline time to find the one who need it and
                        suitable candidate for it
                      </p>
                      <p>- Size of the application.</p>{" "}
                      <p>
                        - Advanced features if there are any to be included.
                      </p>
                      <p>
                        - Finalizing and provided to next level for final
                        confirmation
                      </p>
                      <p>- usually 2 week on and average</p>
                    </div>
                    {/* <!-- <div class="bg-soft-green rounded-lg border px-4 py-3 mt-20">You’ll be sent a confirmation email to verify you so make sure you check your email.</div> --> */}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How to decide which courses to apply?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        - First of all do following steps just after taking
                       desicion of your preferable course
                      </p>
                      <p>
                        - Talk to your seniour and concern teachers about it
                        they will definately give you good information about it.
                      </p>
                      <p>
                        -Then after knowing scholarships name come to our
                        platform to take deep information about that.
                      </p>
                      <p>
                        - There are many features available through which gather
                        and understand every possible things about that
                        scholarships
                      </p>
                      <p>
                        - Match their requirement with your interest
                        
                      </p>
                      <p>- Then simply apply for it using stuhelp.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How to know that when any course / compitition proposal started or
                    ending?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        with great pleasure, we have a great content team who
                        provide you starting and ending date of any scholarships
                        on stuhelp platform.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What are the steps after deciding course for me?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        Hey, After deciding the best suitable course for
                        you now just need to follow steps given in respective
                       course on stuhelp portal.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Can I apply for more than one course?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        Actually, there are some barrier to student who are
                        taking more than one course at same time that you should take only
                        any core subject and with that you can take professional skilled course like marketing / communication skill's course.</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    will i able to changed course detail after final submit?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. Before you click final submit you can change
                    corresponding details yourself but after final submit you
                    need to mail the support team of respective scholarships,
                    the mail id of every courses support team is provided
                    at{" "}
                    <a class="internal-links" href="#">
                      Stuhelp
                    </a>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    What if i have query regarding any course/compitition that i am
                    going to apply using scholars platform ?
                  </Accordion.Header>
                  <Accordion.Body>
                    We have chat bot feautre through which you can solve your
                    query yourself and after that you have query you can use
                    discussion form or contact us.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    As course co-ordinaator i want to add to the best
                    candidate who are suitable for that. How can i do it?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        There are few factors that determine the Way to do it.
                      </p>
                      <p>
                        - Goto admin portal and request for key to access the
                        admin feauter.
                      </p>
                      <p>
                        - After getting key, now you just need to sign-in and
                        provide all nssary information about your scheme.
                      </p>
                      <p>
                        - We will review and give you confirmation about it
                        ASAP;
                      </p>{" "}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    What things teacher can analyse through your Dashboard?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="panel-body">
                      <p>
                        you can add course/compitition/marks of student and check the progress and continue evalution in co-curriculam activities of each student.
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
