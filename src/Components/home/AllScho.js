import React, { useState, useEffect } from "react";
import "./home.css";
import url from "../images/scholaship.png";

// importing all files
import Card from "../Card/card";
import Faq from "./faq/faq";
import Footer from "../footer/footer";

//firebase
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
    const q = query(collection(db, "courses"));
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
    setsch(temp);
  };
  //  if(viewdby==)

  // setsch(temp);

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
                    Courses to Learn Something New{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-primary text-light p-5">
          <div class="container">
            <div class="d-md-flex justify-content-around align-items-center">
              <h3 class="mb-3 mb-md-0 cc">Search Courses</h3>

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
        <section class="mt-100 mb-100" id="services">
          <div
            class="container"
            style={{ backgroundImage: 'url("cta-map-bg.png")' }}
          >
            {schodata.map((ele) => {
              console.log(ele.data().eligibility);
              return (
                <Card
                  name={ele.data().name}
                  eligiblity={ele.data().eligibility}
                  benefit={ele.data().outcome}
                  deadline={ele.data().deadline}
                  viewlink={ele.id}
                  link={ele.data().link}
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
