import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12 d-flex align-items-center">
            <NavLink to="/">
              <img
                src="\assets\255.jpg"
                alt="logo"
                className="logo-size me-3"
              />
               </NavLink>
              <h2
                className="mb-0"
                style={{ fontFamily: "cursive", color: "GrayText" }}
              >
                <b>Retro Movies</b>
              </h2>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
