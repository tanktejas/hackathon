import React, { useState, useEffect } from "react";
import "./det.css";
import "../main.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Footer from "../footer/footer";
import Card from "../Card/card";

// import {
//   collection,
//   query,
//   orderBy,
//   onSnapshot,
//   doc,
// } from "firebase/firestore";

import { db } from "../DB/firebase";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

function CourseDetail() {
//   const [scholar, setscho] = useState([]);

//   useEffect(() => {
//     const q = query(collection(db, "Scholarships"));
//     onSnapshot(q, (qS) => {
//       let data = qS.docs;
//       setscho(data.slice(0, 2));
//     });
//   }, []);

//   if (scholar.length == 0) {
//     return (
//       <>
//         <h1>Loading...</h1>
//       </>
//     );
//   }
//   console.log(scholar);

  return (
    <div>
      <div class=" ccc">
        <div class="  uniqq">
          <div class="siz25 itemm ">
            <AccessTimeIcon />
            <div class="fleep">
              <h4>Last Updated..</h4>
              <h6>25 min ago</h6>
            </div>
          </div>
          <div class="siz25 itemm">
            <EmojiEventsIcon />
            <div class="fleep">
              <h4>Region</h4>
              <h6>INDIA</h6>
            </div>
          </div>
          <div class="siz25 itemm">
            <PublicIcon />
            <div class="fleep">
              <h4>Award</h4>
              <h6>
                Described in <strong> Outcomes</strong>
              </h6>
            </div>
          </div>
          <div class="siz25 itemm">
            <CalendarMonthIcon />
            <div class="fleep">
              <h4>Deadline</h4>
              <h6>27/06/2022</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="common">
        <div
          id="scholarships"
          class="brandScholarshipCourseDetail_box__16Tsq brandScholarshipCourseDetail_paddingB__1zmIh undefined row"
        >
          <article
            id="applybtn"
            class=" brandScholarshipCourseDetail_scholarships__Q4gdU"
          >
            <ul>
              <li>
                <h5>Object Oriented Programming C++</h5>
                <article class="brandScholarshipCourseDetail_content__1uj_y">
                  <article class="brandScholarshipCourseDetail_contentBoxWrapper___GQGi">
                    <span class="brandScholarshipCourseDetail_calendarIcon__2-5hX">
                      <CalendarMonthIcon />
                      <p>Deadline :27/06/2022</p>
                    </span>
                    <article class="brandScholarshipCourseDetail_sectionBox__yP4qi brandScholarshipCourseDetail_firstElem__2pjgC">
                      <span class="brandScholarshipCourseDetail_sectionTitle__2t6sl  sec-t">
                        Eligibility
                      </span>
                      <div>
                        <ul>
                        <div class="merge">
                                  <ChevronRightIcon />
                                  <li>Should have cleared all the subject of Last sem and enrolled in 2nd semester</li>
                                </div>
                                <div class="merge">
                                  <ChevronRightIcon />
                                  <li>Should have cleared all the subject of Last sem and enrolled in 2nd semester</li>
                                </div>
                                <div class="merge">
                                <ChevronRightIcon />
                                <li>Should have cleared all the subject of Last sem and enrolled in 2nd semester</li>
                              </div>
                        </ul>
                      </div>
                    </article>
                    <article class="brandScholarshipCourseDetail_sectionBox__yP4qi">
                      <span class="brandScholarshipCourseDetail_sectionTitle__2t6sl sec-t">
                       Outcomes:
                      </span>
                      <div>
                        <ul>
                        <div class="merge">
                        <ChevronRightIcon />
                        <li>Should have cleared all the subject of Last sem and enrolled in 2nd semester</li>
                      </div>
                      <div class="merge">
                        <ChevronRightIcon />
                        <li>Should have cleared all the subject of Last sem and enrolled in 2nd semester</li>
                      </div>
                      <div class="merge">
                      <ChevronRightIcon />
                      <li>Should have cleared all the subject of Last sem and enrolled in 2nd semester</li>
                    </div>
                        </ul>
                      </div>
                    </article>
                   
                    <article class="brandScholarshipCourseDetail_sectionBox__yP4qi">
                      <span class="brandScholarshipCourseDetail_sectionTitle__2t6sl sec-t">
                        Refrence Books
                      </span>
                      <div>
                       <ul>
                       <div class="merge">
                                  <ChevronRightIcon />
                                  <li>Should have cleared all the subject of Last sem and enrolled in 2nd semester</li>
                                </div>
                                <div class="merge">
                                  <ChevronRightIcon />
                                  <li>Should have cleared all the 2nd semester</li>
                                </div>
                                <div class="merge">
                                <ChevronRightIcon />
                                <li>Should have cleared all the subject of Last sem and enrolled in 2nd semester</li>
                              </div></ul>
                      </div>
                    </article>
                    <article class="centerItem ">
                      <a href="#">
                        <button class="button2 get-a-demo m-2">
                          Apply Now
                        </button>
                      </a>
                      <a
                        class="button2 get-a-demo m-2"
                        href="#"
                        target="_blank"
                      >
                        Check Result
                      </a>
                    </article>
                  </article>
                </article>
              </li>
            </ul>
          </article>
        </div>

      
      </div>

      <div class="scholarshipCourseDetail_box__3aJoB scholarshipCourseDetail_paddingB__HPwi8 ">
        <span class="brandScholarshipCourseDetail_sectionTitle__2t6sl sec-t">
          Rules & Regulation
        </span>
        <div class="scholarshipCourseDetail_content__15zTZ">
          <ul>
            <div class="merge">
              <ChevronRightIcon />
              <li>Only shortlisted candidates will be contacted.</li>
            </div>
            <div class="merge">
              <ChevronRightIcon />
              <li>Canvassing in any form will be a disqualification.</li>
            </div>
            <div class="merge">
              <ChevronRightIcon />
              <li>No correspondence will be entertained in this regard.</li>
            </div>
            <div class="merge">
              <ChevronRightIcon />
              <li>
                The Institute reserves the right not to select anyone without
                assigning any reason.
              </li>
            </div>
            <div class="merge">
              <ChevronRightIcon />
              <li>
                The Institute reserves the right to change/apply appropriate
                shortlisting criteria in case of a large number of applications.
              </li>
            </div>
            <div class="merge">
              <ChevronRightIcon />
              <li>
                An incomplete application without proper supporting documents
                will be summarily rejected.
              </li>
            </div>
            <div class="merge">
              <ChevronRightIcon />
              <li>
                This is purely a contractual appointment for a maximum period of
                two years with an annual renewal based on the performance
                review.
              </li>
            </div>
            <div class="merge">
              <ChevronRightIcon />
              <li>
                Mere fulfilling of the qualifications and experience will not
                confer any right to the candidates for being called for the
                selection process.
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div
        class="scholarshipCourseDetail_grayBg__ee9_t roww"
        style={{ background: "rgb(142 140 140 / 20%)" }}
      >
        <div class="container">
          <div class="scholarshipCourseDetail_box__3aJoBbb row">
            <h5>Disclaimer</h5>
            <article class="scholarshipCourseDetail_content__15zTZ">
              <p>
                All the information provided here is for reference purpose only.
                While we strive to list all scholarships for benefit of
                students, Buddy4Study does not guarantee the accuracy of the
                data published here. For official information, please refer to
                the official website. <a href="/disclaimer">read more</a>
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CourseDetail;
