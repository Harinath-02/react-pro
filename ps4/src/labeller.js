import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Labeller() {
  return (
    <div className="container my-5">
      <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
          <ul className="nav nav-pills w-100 justify-content-evenly">
            <li className="nav-item">
              <NavLink
                exact // <-- Add the exact attribute
                className="nav-link text-light"
                activeClassName="active"
                to="grpt"
              >
                Set Priority
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact // <-- Add the exact attribute
                className="nav-link text-light"
                activeClassName="active"
                to="lab2"
              >
                Set bug
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact // <-- Add the exact attribute
                className="nav-link text-light"
                activeClassName="active"
                to="lpt"
              >
                Transaction History
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Labeller;
