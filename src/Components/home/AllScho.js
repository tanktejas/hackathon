import React, { useState, useEffect } from "react";
import "./home.css";
import url from "../images/scholaship.png";

// importing all files
import Card from "../Card/card";
import Faq from "./faq/faq";
import Footer from "../footer/footer";

//firebase
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

function AllScho() {
  // states for filter
  const [schodata, setsch] = useState([]);
  const [search, setsearch] = useState("");
  const [status, setstatus] = useState(true);
  const [perdata, setperdata] = useState([]);
  const [ismilitry, setismil] = useState(false);
  const [isHandi, setishan] = useState(false);
  const [category, setcate] = useState("all");
  const [viewdby, setviewd] = useState("name");
  const [type, settype] = useState("ascending");

  useEffect(() => {
    setstatus(false);
    const q = query(collection(db, "Scholarships"));
    onSnapshot(q, (qS) => {
      let data = qS.docs;
      setsch(data);
      setperdata(data);
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
    let temp = [...perdata];

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

    if (category != "all") {
      temp = temp.filter((ele) => {
        console.log(ele.data().category.toLowerCase());
        return ele.data().category.toLowerCase() == category;
      });
    }

    if (viewdby == "name") {
      if (type == "ascending") {
        temp.sort(function (a, b) {
          if (a.data().name < b.data().name) return -1;
          else if (a.data().name > b.data().name) return 1;
          return 0;
        });
      } else {
        temp.sort(function (a, b) {
          if (a.data().name > b.data().name) return -1;
          else if (a.data().name < b.data().name) return 1;
          return 0;
        });
      }
    }
    if (viewdby == "deadline") {
      if (type == "ascending") {
        temp.sort(function (a, b) {
          if (
            a.data().closeingDate == "Closed" &&
            b.data().closeingDate == "Closed"
          )
            return 0;
          if (a.data().closeingDate == "Closed") {
            return -1;
          } else if (b.data().closeingDate == "Closed") return 1;

          if (a.data().closeingDate < b.data().closeingDate) return -1;
          else if (a.data().closeingDate > b.data().closeingDate) return 1;
          return 0;
        });
      } else {
        temp.sort(function (a, b) {
          if (
            a.data().closeingDate == "Closed" &&
            b.data().closeingDate == "Closed"
          )
            return 0;

          if (
            a.data().closeingDate == "Closed" ||
            a.data().closeingDate == "Not Declared"
          ) {
            return 1;
          } else if (b.data().closeingDate == "Closed" || a.data().closeingDate == "Not Declared") return -1;

          if (a.data().closeingDate < b.data().closeingDate) return 1;
          else if (a.data().closeingDate > b.data().closeingDate) return -1;
          return 0;
        });
      }
    }
    //  if(viewdby==)

    setsch(temp);
  };

  return (
    <>
      <div style={{ backgroundImage: 'url("pattern-bg.jpg")' }}>
        <div
          class="parallax about-top-slide"
          style={{ backgroundImage: 'url("cta-map-bg.png")' }}
          id="parallax"
        >
          <div class="container">
            <div class="row">
              <div class="top-slide-con">
                <div class="col-md-12 text-left">
                  <h1 class="section-title">
                    View All <br />
                    National International Scholarships{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-primary text-light p-5">
          <div class="container">
            <div class="d-md-flex justify-content-around align-items-center">
              <h3 class="mb-3 mb-md-0 cc">Search Scholarship</h3>

              <div class="input-group news-input">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Scholarship Name"
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
                  if (e.target.value == "Hendicap") {
                    setishan(true);
                  } else setishan(false);
                }}
              >
                <option>Hendicap</option>
                <option selected>Non-hendicap</option>
              </select>
              <select>
                <option>Under Graduates</option>
                <option>Higher Education</option>
                <option>Post Graduates</option>
                <option>Fellowships</option>
              </select>
              <select
                onChange={(e) => {
                  setcate(e.target.value.toLowerCase());
                  console.log(category);
                }}
              >
                <option>All</option>
                <option>OBC</option>
                <option>General</option>
                <option>SC</option>
                <option>ST</option>
              </select>
            </div>
            <div className="filter">
              <div>
                <h3>View By: </h3>
              </div>
              <select
                onChange={(e) => {
                  setviewd(e.target.value.toLowerCase());
                }}
              >
                <option>Name</option>
                <option>Deadline</option>
              </select>
              <select
                onChange={(e) => {
                  settype(e.target.value.toLowerCase());
                }}
              >
                <option>Ascending</option>
                <option>Descending</option>
              </select>

              <button
                class="btn btn-dark btn-lg"
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
        <section class="mt-100 mb-100" id="services">
          <div
            class="container"
            style={{ backgroundImage: 'url("cta-map-bg.png")' }}
          >
            {schodata.map((ele) => {
              return (
                <Card
                  name={ele.data().name}
                  eligiblity={ele.data().eligiblity}
                  benefit={ele.data().benefit}
                  deadline={ele.data().closeingDate}
                />
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default AllScho;
