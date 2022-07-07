import React, { useState } from "react";
import "./allblog.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function CompiCard({
  name,
  Tagline,
  link,
  Round,
  participant,
  tag,
}) {

  return (
    <>
     
      <div className="blg m-10 okk" style={{ backgroundColor: "#bbc7ff80" }}>
        <div class="row oww">
          <div class="col-md-8">
            <div className="blogcont">
              <h2>{name}</h2>
              <p>
                {" "}
                <div class="redd">Tagline</div>
                <div class="merge">
                  <ChevronRightIcon />
                  <li style={{ listStyle: "none" }}> {tag}</li>
                </div>{" "}
              </p>

              <p>
                <div class="redd">Round 1.</div>
                <div class="merge">
                  <ChevronRightIcon />
                  <li style={{ listStyle: "none" }}> {Round[0]}</li>
                </div>
                <br />
                <div class="redd">Round 2.</div>{" "}
                <div class="merge">
                  <ChevronRightIcon />
                  <li style={{ listStyle: "none" }}>{Round[1]}</li>
                </div>{" "}
                <br />
              </p>
              <p>
                <div class="redd">No of Participant - {participant}</div>
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
              src={link}
              alt=""
              className="w-full funnn h-auto  rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
