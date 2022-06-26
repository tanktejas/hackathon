import React from "react";
import "./home.css";
import url from "../images/scholaship.png";

// importing all files
import Card from "../Card/card";
import Faq from "./faq/faq";
import Footer from "../footer/footer";




function AllScho() {
  return (
    <>
    <div style={{backgroundImage: 'url("pattern-bg.jpg")'}}>
        <div class="parallax about-top-slide"  style={{backgroundImage: 'url("cta-map-bg.png")'}} id="parallax" >
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
              />
              <button class="btn btn-dark btn-lg" type="button">
                Search
              </button>
            </div>
          </div>
          <div className="filter">
            <div>
              <h3>Filter : </h3>
            </div>
            <select>
              <option>Hendicap</option>
              <option>Non-hendicap</option>
            </select>
            <select>
            <option>Under Graduates</option>
             <option>Higher Education</option>
              <option>Post Graduates</option>
              <option>Fellowships</option>
            </select>
            <select>
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
        <select>
        <option>Name</option>
        <option>Date Modified</option>
        <option>Latest</option>
        <option>Deadline</option>
      </select>
      <select>
              <option>Ascending</option>
              <option>Descending</option>
            </select>

            
            <button class="btn btn-dark btn-lg" type="button">
           Apply
          </button>
            
          </div>
        </div>
      </section>
      <section class="mt-100 mb-100" id="services">
      <div class="container" style={{backgroundImage: 'url("cta-map-bg.png")'}} >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /><Card />

      <Card />

      <Card /><Card />
      <Card />
      <Card />
      <Card />
      <Card />

    </div>
    </section>
    </div>

           <Footer/>
</>

  )
}

export default AllScho;