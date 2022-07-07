import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./Components/home/home";
import Header from "./Components/Navbar/Header";
import AboutUsPage from "./Components/About/AboutUsPage";
import AllScho from "./Components/home/AllScho";
import Login from "./loginsignup/login";
import Signin from "./loginsignup/signin";
// import Logout from "./loginsignup/change";

import Team from "./Components/Team/Team";
import Details from "./Components/Details/Details";
import AllCard from "./Components/Scholarship detail/schodetail";

import Contact from "./Components/Contact/Contact";
import Comment from "./Components/comment/co";

import { logcont } from "./Loginsignincontext/context";
import { useContext, useEffect, useState } from "react";
import Forgot from "./loginsignup/forgot1";

import TeacherLogin from "./loginsignup/teacherlogin";
import TeacherSign from "./loginsignup/teachersignin";

import { collection, addDoc, Timestamp } from "firebase/firestore";
// import { db } from "./Loginsignincontext/firebase";
import { db } from "./ff";

import data from "./compitition.json";

import Compihome from "./Components/Card/compihome";

function App() {
  const all = useContext(logcont);

  // useEffect(() => {
  //   function fn() {
  //     data.map(async (item) => {
  //       await addDoc(collection(db, "competition"), {
  //         name: item.name,
  //         Tagline: item.Tagline,
  //         participant: item.participant,
  //         Round: item.Round,
  //         tag: item.tag,
  //         link: item.link,
  //       })
  //         .then((result) => {
  //           console.log("ok");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     });
  //   }
  //   fn();
  // }, []);

  if (all.user == undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/compihome" element={<Compihome />}></Route>
          <Routes
            exact
            path="/ViewAllScholarships"
            element={<AllScho />}
          ></Routes>
          <Route exact path="/About-Scholar" element={<AboutUsPage />}></Route>
          <Route exact path="/Team" element={<Team />}></Route>
          <Route exact path="/scholarship-info" element={<Details />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/tlogin" element={<TeacherLogin />}></Route>
          <Route exact path="/tsignin" element={<TeacherSign />}></Route>

          <Route
            exact
            path="/scholarship/:schoid"
            element={<AllCard />}
          ></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/QnA" element={<Comment />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/forgot" element={<Forgot />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
