import React, { useState } from "react";
import "./allblog.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function CompiCard(props) {
  const [classn, setStyle] = useState(props.classn);
  return (
    <>
      <div className="blg m-10" style={{ backgroundColor: "#bbc7ff80" }}>
        <div class="row">
          <div class="col-md-8">
            <div className="blogcont">
              <h2>Bugs Bunny</h2>
              <p>
                {" "}
                <div class="redd">Tagline</div>
                <div class="merge">
                  <ChevronRightIcon />
                  <li style={{ listStyle: "none" }}>
                    {" "}
                    Champions Are Never Born
                  </li>
                </div>{" "}
              </p>

              <p>
                <div class="redd">Round 1.</div>
                <div class="merge">
                  <ChevronRightIcon />
                  <li style={{ listStyle: "none" }}>
                    {" "}
                    Code Error Hunting / Bug Fixing Championship Again, 50%
                    Students To Be Taken For Next Round{" "}
                  </li>
                </div>
                <br />
                <div class="redd">Round 2.</div>{" "}
                <div class="merge">
                  <ChevronRightIcon />
                  <li style={{ listStyle: "none" }}>
                    {" "}
                    A Pattern / Object Will Be Provided To Students And They
                    Have Code It. - Time-Based Evaluation. 50% To Be Taken For
                    Next Round{" "}
                  </li>
                </div>{" "}
                <br />
              </p>
              <p>
                <div class="redd">No of Participant - 2</div>
              </p>

              <div
                className="buttforsc"
                style={{ flexDirection: "flex-start" }}
              >
                <Link style={{ textDecoration: "none" }} to="/">
                  <button style={{ marginRight: "7px" }}> View </button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/">
                  <button>Apply</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <img
              src="https://github.com/jeet-1452001/udaan22-Images/blob/master/images/computer%20IT/Bugs%20Bunny.jpg?raw=true"
              alt=""
              className="w-full funnn h-auto  rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
