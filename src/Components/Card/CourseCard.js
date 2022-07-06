import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function CourseCard({ name, eligiblity, benefit, deadline, viewlink }) {
  const url = `/scholarship/${viewlink}`;

  return (
    <>
      <div className="bg-white w-72 shadow-lg rounded-lg CourseCardmain">
        <img
          src="https://bigeye.ug/wp-content/uploads/2016/05/Couple-travel.jpg"
          alt=""
          className="w-full h-44 object-cover rounded-t-lg"
        />
        <div className="px-6 py-3 sbody">
          <div className="bodypart">
            <p className="text-gray-800 pt-3 pb-2 dead">
              <CalendarMonthIcon /> <span className="dedy"> 27/06/2022</span>
            </p>

            <h1
              className="font-bold text-[20px] stag"
              style={{ textDecoration: "none" }}
            >
              Object Oriented Programming C++
            </h1>
            <div className="desc">
            <h5>Objective :</h5>
            <h6 className="pt-2  text-[15px] text-gray-700">
            To enhance logical thinking and to impart basic programming skills using C programming language
            </h6>  
          </div>
            <div className="eligi">
              <h5>Eligibiity :</h5>
              <h6 >Should have cleared all the subject of Last sem and enrolled in 2nd semester</h6>
            </div>
           
            <div className="desc">
              <h5>Credit :</h5>
             
              <h6 className="mb-5"> 4 (3-0-1)</h6>
            </div>
            
            <div className="buttforsc">
              <Link style={{ textDecoration: "none" }} to={url}>
                <button> View </button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={url}>
                <button>Apply</button>
              </Link>
            </div>
            <div className="p-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
