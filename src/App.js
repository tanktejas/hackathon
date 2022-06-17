import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./Components/home/home";
import Header from "./Components/Navbar/Header"
import AboutUsPage from "./Components/AboutUsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/About-Scholar" element={<AboutUsPage/>}></Route>
        </Routes>
       
          
       
      </BrowserRouter>
    </>
  );
}

export default App;
