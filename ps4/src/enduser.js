import { useParams, NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";

function Enduser() {
  let { id } = useParams();

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
                to="report"
              >
                Report
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact // <-- Add the exact attribute
                className="nav-link text-light"
                activeClassName="active"
                to="Connect"
              >
                Get Report
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact // <-- Add the exact attribute
                className="nav-link text-light"
                activeClassName="active"
                to="upatch"
              >
                Patches
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <p>{id}</p>
      <Outlet />
    </div>
  );
}

export default Enduser;