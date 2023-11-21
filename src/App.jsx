import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Cart from './components/Cart';
import Reports from './components/Reports';
import ManageStore from './components/ManageStore';
import Suppliers from './components/Suppliers';
import ReportsUser from './components/Reports_user';
import ReportsTransaction from './components/Reports_transaction';
import LoginPage from './components/Login';
import Modal from './components/Modal';

import "./css/AddProduct.css";
import "./css/App.css";
import "./css/Dashboard.css";
import "./css/Inventory.css";
import "./css/Cart.css";
import "./css/Reports.css";
import "./css/Suppliers.css";
import "./css/Modal.css";
import "./css/Login.css";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus && loggedInStatus === 'true') {
      setIsLoggedIn(true);
      resetTimeout();
      setupListeners();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    resetTimeout();
    setupListeners();
    setShowModal(false); // Close the modal on successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  let sessionTimeout;

  const resetTimeout = () => {
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
    }
    sessionTimeout = setTimeout(() => {
      handleLogout();
    }, 300000); // Adjust the timeout duration as needed
  };

  const setupListeners = () => {
    ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'].forEach((event) => {
      window.addEventListener(event, resetTimeout);
    });
  };

  const removeListeners = () => {
    ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'].forEach((event) => {
      window.removeEventListener(event, resetTimeout);
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setIsLoggedIn(false); // Logout when the modal is closed
    localStorage.removeItem('isLoggedIn');
  };

  if (isLoggedIn === null) {
    return <div>IM.AI is Loading...</div>;
  }

  return (
    <div className="App">
      <div className="RouterContainer">
        {isLoggedIn ? (
          <>
            {showModal && <Modal onClose={closeModal} handleLogin={handleLogin} />}
            <div className="Sidebar">
              <Sidebar handleLogout={handleLogout} />
            </div>
            <div className="Content">
              <Router>
                <Header handleLogout={handleLogout} />
                <Routes>
                  <Route exact path="/" element={<Dashboard />} />
                  <Route exact path="/Inventory" element={<Inventory />} />
                  <Route exact path="/Cart" element={<Cart />} />
                  <Route exact path="/Reports" element={<Reports />} />
                  <Route exact path="/Suppliers" element={<Suppliers />} />
                  <Route exact path="/Manage-Store" element={<ManageStore />} />
                  <Route exact path="/Reports-User" element={<ReportsUser />} />
                  <Route exact path="/Log-out" element={<Logout handleLogout={handleLogout} />} />
                  <Route exact path="/Reports-Transaction" element={<ReportsTransaction />} />
                </Routes>
              </Router>
            </div>
          </>
        ) : (
          <LoginPage handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
        )}
      </div>
    </div>
  );
}
const Logout = ({ handleLogout }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLogout();
      setShowMessage(false); // Hide the message after 3 seconds
      window.location.href = '/'; // Redirect to the home page
    }, 3000);

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, [handleLogout]);

  return (
    showMessage && (
      <div className='Logout'>
        <img 
        src='https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif' 
        alt='Logging out' 
        style={{ height: '50px', width: '50px' }}
      />
      <br/>
        Logging out...
       
      </div>
    )
  );
};



export default App;
