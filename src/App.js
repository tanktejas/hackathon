import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="App">
        <h1>Hello, Vivek Baldaniya</h1>
        <Cards /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>{/* all routes will come here  */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
