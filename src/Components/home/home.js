import React from "react";
import "./home.css";
import url from "../images/scholaship.png";

// importing all files
import Card from "../Card/card";
import Faq from "./faq/faq";
import Footer from "../footer/footer";
import ServiceFaqM from "../ServiceFaqM";

function Home() {
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
                <span class="text-warning">Welcome to Scholar !!</span>
              </h1>
              <p class="lead my-4 ">
                Here you will find each kind of scholarships and all details
                about it.
              </p>
              <p class="lead my-4 ">
                Find your best scholarship and take advantage of it.
              </p>
              <button
                class="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#Enroll"
              >
                All scholarships
              </button>
            </div>

            <a href="https://svgshare.com/s/gH0" className="right">
              <img class="img-fluid  d-none d-sm-block" src={url} title="" />
            </a>
          </div>
        </div>
      </section>
      {/* scholarship details filters */}
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
              <option>For-Miletry</option>
              <option>Normal</option>
            </select>
            <select>
              <option>OBC</option>
              <option>General</option>
              <option>SC</option>
              <option>ST</option>
            </select>
          </div>
        </div>
      </section>
      {/* scholarship filter over */}

      {/* scholarship card start  */}

      <section class="" id="services">
        <h2>All Scholarchips</h2>
        <div class="container">
          <Card />
          <Card />
          <Card />
          <Card />
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
      {/* 
      <section class="p-5 bg-dark text-light" id="learn ">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h2>Learn The react</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                labore repudiandae eveniet commodi. Recusandae, vitae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                libero porro quis. Perferendis error iste, voluptatem aliquid
                dignissimos qui quia consectetur quaerat possimus similique
                fugit eos pariatur itaque laboriosam deserunt.
              </p>
              <a href="#" class="btn btn-light mt3">
                <i class="bi bi-chevron-right"></i>
                read more
              </a>
            </div>

            <div class="col-md">
              <a href="https://svgshare.com/s/gHb">
                <img
                  class="img-fluid "
                  src="https://svgshare.com/i/gHb.svg"
                  title=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="p-5" id="questions">
        <div class="container">
          <h2 class="text-center mb-4">Frequent asked</h2>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q-one"
                >
                  Our exact Locaction
                </button>
              </h2>
              <div
                id="q-one"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt veniam omnis nemo eius eos earum cupiditate dicta quo
                  adipisci voluptates.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q-tow"
                >
                  How much does it cost to attend
                </button>
              </h2>
              <div
                id="q-tow"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt veniam omnis nemo eius eos earum cupiditate dicta quo
                  adipisci voluptates.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q-three"
                >
                  How do I sign up?
                </button>
              </h2>
              <div
                id="q-three"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt veniam omnis nemo eius eos earum cupiditate dicta quo
                  adipisci voluptates.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q-four"
                >
                  Do you help me find a job?
                </button>
              </h2>
              <div
                id="q-four"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt veniam omnis nemo eius eos earum cupiditate dicta quo
                  adipisci voluptates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Instructors" class="p-5 bg-primary">
        <div class="container">
          <h2 class="text-center text-white">Our instructors</h2>
          <p class="lead text-center text-white mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            saepe labore quo laboriosam voluptas.
          </p>

          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    class="rounded-circle mb-3"
                  />
                  <h3 class="card-title mb-3">John Doe</h3>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                    dolorum dolor in atque commodi!
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1 lead"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    class="rounded-circle mb-3"
                  />
                  <h3 class="card-title mb-3">Jahn Doe</h3>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                    dolorum dolor in atque commodi!
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1 lead"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    class="rounded-circle mb-3"
                  />
                  <h3 class="card-title mb-3">Dalia</h3>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                    dolorum dolor in atque commodi!
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1 lead"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/3.jpg"
                    class="rounded-circle mb-3"
                  />
                  <h3 class="card-title mb-3">Sara Doe</h3>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                    dolorum dolor in atque commodi!
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1 lead"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1 lead"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="p-5" id="contact">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <h2 class="text-center mb-4">Contact Info</h2>
              <ul class="list-group list-group-flush lead">
                <li class="list-group-item">
                  <span class="fw-bold">Main Locaction:</span>50 M street Fs
                </li>

                <li class="list-group-item">
                  <span class="fw-bold">Phone Number:</span>(+1) 234 567 890
                </li>

                <li class="list-group-item">
                  <span class="fw-bold">Busniss E-mail:</span>example@email.com
                </li>

                <li class="list-group-item">
                  <span class="fw-bold">Students E-mail:</span>
                  sexample@email.com
                </li>
              </ul>
            </div>

            <div class="col-md">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </section>

      <footer class="p-5 bg-dark text-white text-center position-relative">
        <div class="container">
          <p class="lead">Copyright &copy; 2022 khawla zahi</p>

          <a href="#" class="position-absolute bottom-0 end-0 p-5">
            <i class="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>

      <div
        class="modal fade"
        id="Enroll"
        tabindex="-1"
        aria-labelledby="EnrollLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="EnrollLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <p class="lead">Fill That Form and we will get back to you</p>

              <form>
                <div class="mb-3">
                  <label for="first-name" class="col-form-label">
                    First Name:
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>

                <div class="mb-3">
                  <label for="first-name" class="col-form-label">
                    First Name:
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>

                <div class="mb-3">
                  <label for="first-name" class="col-form-label">
                    First Name:
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>

                <div class="mb-3">
                  <label for="first-name" class="col-form-label">
                    First Name:
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
