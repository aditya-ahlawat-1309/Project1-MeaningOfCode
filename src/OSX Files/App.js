import React from "react";
import "./app_file.css";
import Navbar from "./Components/Navbar/Navbar";
import BottomBar from "./Components/BottomBar/BottomBar2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Finder from "./IconFunctions/Finder/Finder";
import background from "./Media/lightBulbWallpaper.jpg"
import background2 from "./Media/background2.jpg";
import background3 from "./Media/background3.jpg"
import BottomBar2 from "./Components/BottomBar/BottomBar";

function App() {
  return (
    <Router className="app-header">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finder" element={<Finder />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div
      className="app-header"
      style={{ backgroundColor: "black", zIndex: "-2" }}
    >
      <Navbar />
      <img
        src={background2}
        style={{
          width: "20%",
          height: "70%",
          left: "7.5%",
          position: "absolute",
          top: "7.5%",
          backgroundSize: "cover",
          zIndex: "-3",
        }}
      ></img>
      <img
        src={background3}
        style={{
          width: "15%",
          height: "40%",
          left: "75%",
          position: "absolute",
          top: "27.5%",
          backgroundSize: "cover",
          zIndex: "-3",
        }}
      ></img>
      <img
        src={background}
        style={{
          width: "40%",
          height: "45%",
          left: "30%",
          position: "absolute",
          top: "17.5%",
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      ></img>
      <BottomBar2 />
    </div>
  );
}

export default App;
