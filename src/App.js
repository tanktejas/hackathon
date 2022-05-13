import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./Components/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
