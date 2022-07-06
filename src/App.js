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
import { useContext, useState } from "react";

function App() {
  const all = useContext(logcont);
  if (all.user == undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/ViewAllScholarships"
            element={<AllScho />}
          ></Route>
          <Route exact path="/About-Scholar" element={<AboutUsPage />}></Route>
          <Route exact path="/Team" element={<Team />}></Route>
          <Route exact path="/scholarship-info" element={<Details />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/scholarship/:schoid"
            element={<AllCard />}
          ></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/QnA" element={<Comment />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
