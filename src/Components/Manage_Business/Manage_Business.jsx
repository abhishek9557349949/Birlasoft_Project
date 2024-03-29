import React, { useState, useEffect } from 'react';
import './Manage_Business.css';
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.png';

const Manage_Business = () => {
  const [inventoryDetails, setInventoryDetails] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://bsnodl-15122.birlasoft.com:9083/lookup/getusers-data');
      const data = await response.json();
      setInventoryDetails(data.userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleRevokeAccess = async (userId) => {
    try {
      const response = await fetch('http://bsnodl-15122.birlasoft.com:9084/request/revoke-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      alert(`Revoke Access Response: ${data.response}`);
    } catch (error) {
      console.error('Error revoking access:', error);
    }
  };

  const handleGrantAccess = async (userId) => {
    try {
      const response = await fetch('http://bsnodl-15122.birlasoft.com:9084/request/approve-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      alert(`Revoke Access Response: ${data.response}`);
    } catch (error) {
      console.error('Error revoking access:', error);
    }
  };

  return (
    <div className='body'>
      <header>
        <div className="logo"><img src={logo} className='logo' alt="logo" /></div>
        <nav>
          <ul>
            <li>
              <Link to = "/owner-home">Back</Link>
            </li>
            <li className="dropdown">
              <span className="dropbtn">
                Hi Chinki
              </span>
              <div className="dropdown-content">
                <Link to="/">Logout</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <section className="manage-bill">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Product Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={fetchUserData}>Search</button>
        </div>
        <div className="bill-list">
          {inventoryDetails
            .filter((product) =>
              product.employeeName.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((product, index) => (
              <div className="bill-item" key={index}>
              <div className="bill-info">
                <p className="customer-name"><span>User Name: </span>{product.userName}</p>
                <p className="date"><span>Mail Id: </span>{product.mailId}</p>
                <p className="bill-id"><span>Employee Name: </span>{product.employeeName}</p>
                <p className="total-amount"><span>Account Status: </span>{product.accountStatus}</p>
                <p className="discount"><span>Buisness Name: </span>{product.buisnessName}</p>
                <p className="order-status"><span>Role: </span>{product.role}</p>
              
            </div>
                <button className='btn' onClick={() => handleRevokeAccess(product.userName)}>Revoke Access</button>
                <button onClick={() => handleGrantAccess(product.userName)}>Grant Access</button>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Manage_Business;
