import React, { useState, useEffect } from 'react';
import './ManageBills.css';
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.png';

const ManageBills = () => {
  const [billDetailList, setBillDetailList] = useState([]);
  const [modalData, setModalData] = useState({
    billId: '',
    billDate: '',
    totalAmount: '',
    discount: '',
    customerName: '',
    email: '',
    phoneNumber: '',
    address: '',
    productName: '',
    productUnitPrice: '',
    quantity: '',
    totalPrice: '',
  });

  useEffect(() => {
    const fetchBillData = async () => {
      try {
        const response = await fetch('http://bsnodl-15122.birlasoft.com:9083/lookup/all-bills-data');
        const data = await response.json();
        setBillDetailList(data.billDetailList);
      } catch (error) {
        console.error('Error fetching bill data:', error);
      }
    };

    fetchBillData();
  }, []);

  const showBillDetails = async (billId) => {
    try {
      // Make a request to the specific-bill-info URL
      const response = await fetch('http://bsnodl-15122.birlasoft.com:9084/request/get-specific-bill-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          billId: billId,
        }),
      });

      const data = await response.json();
      setModalData({
        billId: data.billInfo.billId,
        billDate: data.billInfo.billDate,
        totalAmount: data.billInfo.totalAmount,
        discount: data.billInfo.discount,
        customerName: data.billInfo.customerName,
        email: data.billInfo.email,
        phoneNumber: data.billInfo.phoneNumber,
        address: data.billInfo.address,
        productName: data.billInfo.productName,
        productUnitPrice: data.billInfo.productUnitPrice,
        quantity: data.billInfo.quantity,
        totalPrice: data.billInfo.totalPrice,
      });

      const billModal = document.getElementById('billModal');
      billModal.style.display = 'block';
    } catch (error) {
      console.error('Error fetching specific bill info:', error);
    }
  };

  const closeModal = () => {
    const billModal = document.getElementById('billModal');
    billModal.style.display = 'none';
  };

  const handleModalClick = (event) => {
    const billModal = document.getElementById('billModal');
    if (event.target === billModal) {
      billModal.style.display = 'none';
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
      <h1>Customer Bills Data Summary</h1>
      <section className="manage-bill">
        <div className="search-bar">
          <input type="text" placeholder="Search by Bill ID or Customer Name" />
          <button>Search</button>
        </div>
        <div className="bill-list">
          {billDetailList.map((bill) => (
            <div className="bill-item" key={bill.billId} onClick={() => showBillDetails(bill.billId)}>
              <div className="bill-info">
                <p className="customer-name"> <span>Customer Name: </span>{bill.customerName}</p>
                <p className="date"><span>Date: </span>{bill.billDate}</p>
                <p className="bill-id"><span>Bill Id: </span>{bill.billId}</p>
                <p className="total-amount"><span>Total Amount: </span>${bill.totalAmount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div id="billModal" className="modal" onClick={handleModalClick}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-header">
            <h2>
              Bill Details - <span id="modalBillId">{modalData.billId}</span>
            </h2>
            <p className="customer-name" id="modalCustomerName">
              {modalData.customerName}
            </p>
            <p className="date" id="modalDate">
              {modalData.billDate}
            </p>
          </div>
          <div className="modal-info">
            <p>
              Total Amount: <span id="modalTotalAmount">{modalData.totalAmount}</span>
            </p>
            <p>
              Discount: <span id="modalDiscount">{modalData.discount}</span>
            </p>
            <p>
              Email: <span id="modalEmail">{modalData.email}</span>
            </p>
            <p>
              Phone Number: <span id="modalPhoneNumber">{modalData.phoneNumber}</span>
            </p>
            <p>
              Address: <span id="modalAddress">{modalData.address}</span>
            </p>
          </div>
          <div className="modal-items">
            <h3>Items</h3>
            <ul id="modalItemList">
              <li>Product Name - {modalData.productName}
              <ol><li>Quantity - {modalData.quantity}</li>
              <li>Price - {modalData.productUnitPrice}</li></ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBills;
