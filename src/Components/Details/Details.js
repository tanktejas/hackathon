import React from "react";
import "./det.css";
import "../main.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Footer from "../footer/footer";

function Details({ data }) {
  console.log(data);
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
              <h6>{data.region.toUpperCase()}</h6>
            </div>
          </div>
          <div class="siz25 itemm">
            <PublicIcon />
            <div class="fleep">
              <h4>Award</h4>
              <h6>Rs.40000 per year</h6>
            </div>
          </div>
          <div class="siz25 itemm">
            <CalendarMonthIcon />
            <div class="fleep">
              <h4>Deadline</h4>
              <h6>{data.closeingDate}</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="common">
        <div
          id="scholarships"
          class="brandScholarshipDetails_box__16Tsq brandScholarshipDetails_paddingB__1zmIh undefined row"
        >
          <article
            id="applybtn"
            class=" brandScholarshipDetails_scholarships__Q4gdU"
          >
            <ul>
              <li>
                <h5>{data.name}</h5>
                <article class="brandScholarshipDetails_content__1uj_y">
                  <article class="brandScholarshipDetails_contentBoxWrapper___GQGi">
                    <span class="brandScholarshipDetails_calendarIcon__2-5hX">
                      <CalendarMonthIcon />
                      <p>Deadline {data.closeingDate}</p>
                    </span>
                    <article class="brandScholarshipDetails_sectionBox__yP4qi brandScholarshipDetails_firstElem__2pjgC">
                      <span class="brandScholarshipDetails_sectionTitle__2t6sl  sec-t">
                        Eligibility
                      </span>
                      <div>
                        <ul>
                          {data.eligiblity.map((item) => {
                            return (
                              <>
                                <div class="merge">
                                  <ChevronRightIcon />
                                  <li>{item}</li>
                                </div>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </article>
                    <article class="brandScholarshipDetails_sectionBox__yP4qi">
                      <span class="brandScholarshipDetails_sectionTitle__2t6sl sec-t">
                        Benefits:
                      </span>
                      <div>
                        <ul>
                          {data.benefit.map((item) => {
                            return (
                              <>
                                <div class="merge">
                                  <ChevronRightIcon />
                                  <li>{item}</li>
                                </div>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </article>
                    <article class="brandScholarshipDetails_sectionBox__yP4qi">
                      <span class="brandScholarshipDetails_sectionTitle__2t6sl sec-t">
                        Documents
                      </span>
                      <div>
                        <ul>
                          {data.document.map((item) => {
                            return (
                              <>
                                <div class="merge">
                                  <ChevronRightIcon />
                                  <li>{item}</li>
                                </div>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </article>
                    <article class="brandScholarshipDetails_sectionBox__yP4qi">
                      <span class="brandScholarshipDetails_sectionTitle__2t6sl sec-t">
                        How can you apply?
                      </span>
                      <div>
                        <p>Click on the 'Apply Now' button below.</p>
                      </div>
                    </article>
                    <article class="centerItem ">
                      <button class="button2 get-a-demo m-2">Apply Now</button>
                      <a
                        class="button2 get-a-demo m-2"
                        href="/scholarship-result/keep-india-smiling-foundational-grant-for-individuals-helping-others-2020-21"
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

        <section class=" featuredScholarshipsDefault_featuredScholarshipsDefault__25PDG">
          <h4>Featured Scholarships</h4>
          <div class="cardd brandScholarshipDetails_content__1uj_y">
            <h6>here scholarships card come</h6>
          </div>
        </section>
      </div>

      <div class="scholarshipDetails_box__3aJoB scholarshipDetails_paddingB__HPwi8 ">
        <span class="brandScholarshipDetails_sectionTitle__2t6sl sec-t">
          Terms and Conditions
        </span>
        <div class="scholarshipDetails_content__15zTZ">
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
        class="scholarshipDetails_grayBg__ee9_t roww"
        style={{ background: "rgb(142 140 140 / 20%)" }}
      >
        <div class="container">
          <div class="scholarshipDetails_box__3aJoBbb row">
            <h5>Disclaimer</h5>
            <article class="scholarshipDetails_content__15zTZ">
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

export default Details;
