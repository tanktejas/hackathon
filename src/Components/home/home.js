import React, { useEffect, useState } from "react";
import "./home.css";
import url from "../images/scholaship.png";

// importing all files
import Card from "../Card/card";
import Faq from "./faq/faq";
import Footer from "../footer/footer";
import ServiceFaqM from "../Faq/ServiceFaqM";
import { Link } from "react-router-dom";

import { db } from "../DB/firebase";

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
    const q = query(collection(db, "Scholarships"));
    onSnapshot(q, (qS) => {
      let data = qS.docs.slice(0, 6);
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

    if (isHandi) {
      temp = temp.filter((ele) => {
        return ele.data().isHandi;
      });
    }

    if (ismilitry) {
      temp = temp.filter((ele) => {
        return ele.data().isMilitry;
      });
    }

    if (category != "all") {
      console.log(1);
      temp = temp.filter((ele) => {
        console.log(ele.data().category.toLowerCase());
        return ele.data().category.toLowerCase() == category;
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
                  All scholarships
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
     <CourseDetail/>
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
          <div className="filter">
            <div>
              <h3>Filter : </h3>
            </div>
            <select
              onChange={(e) => {
                if (e.target.value === "Hendicap") {
                  setishan(true);
                } else setishan(false);
              }}
            >
              <option>Hendicap</option>
              <option selected>Non-hendicap</option>
            </select>
            <select
              onChange={(e) => {
                if (e.target.value == "For-Miletry") {
                  setismil(true);
                  console.log(ismilitry);
                } else {
                  setismil(false);
                }
              }}
            >
              <option>For-Miletry</option>
              <option selected>Normal</option>
            </select>
            <select
              onChange={(e) => {
                setcate(e.target.value.toLowerCase());
              }}
            >
              <option selected>All</option>
              <option>OBC</option>
              <option>General</option>
              <option>SC</option>
              <option>ST</option>
            </select>
            <button
              class="btn btn-dark btn-lg  applyfilt"
              type="button"
              onClick={() => {
                filter();
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </section>

      <section class="" id="services">
        <h1 class="section-title text-center">All Scholarships</h1>
        <div class="container">
          {schodata.map((ele) => {
            return (
              <Card
                name={ele.data().name}
                eligiblity={ele.data().eligiblity}
                benefit={ele.data().benefit}
                deadline={ele.data().closeingDate}
                viewlink={ele.id}
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
