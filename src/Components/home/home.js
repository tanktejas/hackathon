import React, { useEffect, useState } from "react";
import "./home.css";
import url from "../images/scholaship.png";

// importing all files
import Card from "../Card/card";
import Faq from "./faq/faq";
import Footer from "../footer/footer";
import ServiceFaqM from "../Faq/ServiceFaqM";
import { Link } from "react-router-dom";

import { db } from "../../ff";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
} from "firebase/firestore";

import { addDoc, Timestamp } from "firebase/firestore";
import CourseCard from "../Card/CourseCard";
import CompiCard from "../Card/CompiCard";
import CourseDetail from "../Details/CourseDetail";

function Home() {
  const [schodata, setsch] = useState([]);
  const [search, setsearch] = useState("");
  const [status, setstatus] = useState(true);
  const [perdata, setperdata] = useState([]);
  const [ismilitry, setismil] = useState(false);
  const [isHandi, setishan] = useState(false);
  const [category, setcate] = useState("all");

  useEffect(() => {
    setstatus(false);
    const q = query(collection(db, "courses"));
    onSnapshot(q, (qS) => {
      let data = qS.docs.slice(0, 3);
      setsch(data);
      setperdata(qS.docs);
    });
    setstatus(true);
  }, []);

  if (!status) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const filter = () => {
    let temp = perdata;

    if (search != "") {
      temp = temp.filter((ele) => {
        return ele.data().name.toLowerCase().includes(search.toLowerCase());
      });
    }

    let dd = temp;
    if (dd.length > 6) dd = dd.slice(0, 6);

    setsch(dd);
  };

  return (
    <>
      {/* header  */}
      <section
        class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
        id="home"
      >
        <div class="container headertop">
          <div class="d-sm-flex align-items-center justify-content-between head">
            <div className="left">
              <h1>
                <span class="text-warning">Welcome to STUHELP !!</span>
              </h1>
              <p class="lead my-4 ">
                Here you will register for course/compitition -- Teacher's can
                analyse each Student Evalution
              </p>
              <p class="lead my-4 ">
                Find your best Course and take advantage of it.
              </p>
              <Link to="/ViewAllScholarships">
                <button
                  class=" button2"
                  data-bs-toggle="modal"
                  data-bs-target="#Enroll"
                >
                  All Courses
                </button>
              </Link>
            </div>

            <a href="https://svgshare.com/s/gH0" className="right">
              <img
                class="img-fluid  d-none d-sm-block"
                src="img/44.png"
                title=""
              />
            </a>
          </div>
        </div>
      </section>
      {/* scholarship details filters */}
      <section class="bg-primary text-light p-5">
        <div class="container">
          <div class="d-md-flex justify-content-around align-items-center">
            <h3 class="mb-3 mb-md-0 cc">Search Course</h3>

            <div class="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Course Name"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
              <button
                class="btn btn-dark btn-lg"
                type="button"
                onClick={() => {
                  filter();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="" id="services">
        <h1 class="section-title text-center">All Courses</h1>
        <div class="container">
          {schodata.map((ele) => {
            return (
              <Card
                name={ele.data().name}
                eligiblity={ele.data().eligibility}
                benefit={ele.data().objective}
                deadline={ele.data().deadline}
                viewlink={ele.id}
                link={ele.data().link}
                credit={ele.data().credit}
              />
            );
          })}
        </div>
        <div class="container ">
          <div className=" col-md-12 ml-0 ml-lg-3 my-2 my-lg-0 text-center">
            <Link style={{ textDecoration: "none" }} to="/ViewAllScholarships">
              <a className=" button2 " href="#">
                view more
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* scholarship card end  */}

      {/* Faq starts  */}
      <section class="" id="about">
        <div className="container faq">
          <ServiceFaqM />
        </div>
      </section>
      {/* faq ends  */}
      <Footer />
    </>
  );
}

export default Home;
