import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import { BrowserRouter as Router, Routes,useParams, Route, Link,NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Verifier() {
    return (
        <div className="container my-5">
      <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
          <ul className="nav nav-pills w-100 justify-content-evenly">
            <li className="nav-item" role="presentation">
              <NavLink
                className="nav-link text-light"
                activeClassName="active"
                to="verifying">verifying
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                className="nav-link text-light"
                activeClassName="active"
                to="verified">verified
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                className="nav-link text-light"
                activeClassName="active"
                to="vpt">Transaction History
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
            
    );
}
export default Verifier;