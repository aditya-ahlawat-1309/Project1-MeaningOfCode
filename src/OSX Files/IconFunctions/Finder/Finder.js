import React from 'react'
import  BottomBar  from '../../Components/BottomBar/BottomBar';
import  Navbar  from '../../Components/Navbar/Navbar';
import "./Finder.css";
import background from "../../Media/background.jpg"
import iconsBack from "../../Media/iconsBackground.webp"
const Finder = () => {
  return (
    <div
      className="app-header"
      style={{ backgroundColor: "black", zIndex: "-2" }}
    >
      
      <Navbar />
      <div>
        <div
          style={{
            width: "95%",
            height: "80%",
            left: "2.5%",
            position: "absolute",
            top: "3.5%",

            backgroundColor:"white",
            zIndex: "-1",
            opacity: "1",
          }}
        ></div>
        <br />
        <br />
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          <b
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              padding: "1.5px 8px",
              marginLeft: "3%",
              position:"absolute",
marginTop:"-1%",
            }}
          >
          X 
          </b>
        </a>
      </div>
      <BottomBar />
    </div>
  );
}

export default Finder;
