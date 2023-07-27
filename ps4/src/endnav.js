import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import { BrowserRouter as Router, Routes, useParams, Route, Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Endnav() {
    // let { id } = useParams();
    const [role, setRole] = useState('');
    const navigate=useNavigate();
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedUser = localStorage.getItem('uname');
    if (storedRole && storedUser) {
      setRole(storedRole);
      setUser(storedUser);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('uname');
    // sessionStorage.removeItem('isLoggedIn');
    // sessionStorage.removeItem('role');
    // sessionStorage.removeItem('uname');
    setIsLoggedIn(false);
    setRole('');
    setUser('');
    navigate("/login");
    // window.location.reload();
  };
    return (
        <Router>
        <div class="container my-5">
            <nav className="navbar navbar-expand-md bg-purple">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler text-bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <Link className="nav-link text-light" to="/about">
                                    about
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link text-light" to="/contact">
                                    contact
                                </Link>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item mx-2">
                                    <button className="nav-link btn btn-link text-light" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link text-light" to="/signup">
                                            Signup
                                        </Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link text-light" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                </>
                            )}
                            {role === 'enduser' && (
                                <>
                                    <li className="nav-item col-sm text-center">
                                        <Link className="nav-link text-light" to="/enduser">
                                            end user
                                        </Link>
                                    </li>
                                    {/* Additional end user links */}
                                </>
                            )}
                            {role === 'labeller' && (
                                <>
                                    <li className="nav-item col-sm text-center active">
                                        <Link className="nav-link text-light" to="/labeller">
                                            labeller
                                        </Link>
                                    </li>
                                    {/* Additional labeller links */}
                                </>
                            )}
                            {role === 'admin' && (
                                <>
                                    <li className="nav-item col-sm text-center active">
                                        <Link className="nav-link text-light" to="/admin">
                                            admin
                                        </Link>
                                    </li>
                                    {/* Additional admin links */}
                                </>
                            )}
                            {role === 'developer' && (
                                <>
                                    <li className="nav-item col-sm text-center active">
                                        <Link className="nav-link text-light" to="/developer">
                                            developer
                                        </Link>
                                    </li>
                                    {/* Additional developer links */}
                                </>
                            )}
                            {role === 'verifier' && (
                                <>
                                    <li className="nav-item col-sm text-center active">
                                        <Link className="nav-link text-light" to="/verifier">
                                            verifier
                                        </Link>
                                    </li>
                                    {/* Additional verifier links */}
                                </>
                            )}
                            {role === 'user' && (
                                <>
                                    <li className="nav-item col-sm text-center active">
                                        <Link className="nav-link text-light" to="/user">
                                            user
                                        </Link>
                                    </li>
                                    {/* Additional user links */}
                                </>
                            )}
                        </ul>

                    </div>
                </div>
            </nav>
            </div>
            </Router>
    );
}
export default Endnav;