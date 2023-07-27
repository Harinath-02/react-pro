import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ims/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const d = document.getElementById('status');
      if (response.ok) {
        const data = await response.json();
        const { role, uname } = data;

        // Store the role and uname in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('role', role);
        localStorage.setItem('uname', uname);
        // sessionStorage.setItem('isLoggedIn', 'true');
        // sessionStorage.setItem('role', role);
        // sessionStorage.setItem('uname', uname);
        navigate(`/${role}`);
        window.location.reload();
        d.innerHTML = 'Login Successful';
        console.log('Login successful');
      } else {
        toast.error('Invalid credentials!', {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        d.innerHTML = 'Invalid credentials';
        console.log('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <h1>Login</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
            <p id="status"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
