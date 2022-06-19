import React from 'react'
import "./Navbar.css"

 const Navbar = () => {
  return (
    <div class="navbar-header">
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "3%", fontFamily: "roboto flex" }}>
          <b>By : A D I T Y A</b>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/" style={{textDecoration:"none",color:"white"}}>
            <b>H o m e</b>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>P r o j e c t s</b>
        </div>
      </div>
    </div>
  );
}
export default Navbar;