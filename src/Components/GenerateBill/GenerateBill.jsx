// GenerateBill.jsx

import React, { useState } from 'react';
import './GenerateBill.css';

function GenerateBill() {
  const [billDetails, setBillDetails] = useState({
    customerName: '',
    items: [],
    totalAmount: 0,
  });

  const handleCustomerNameChange = (e) => {
    setBillDetails({ ...billDetails, customerName: e.target.value });
  };

  const handleItemsChange = (e) => {
    const items = e.target.value.split(',').map((item) => item.trim());
    setBillDetails({ ...billDetails, items });
  };

  const calculateTotalAmount = () => {
    const totalAmount = billDetails.items.reduce((total, item) => {
      // For simplicity, let's assume each item has a predefined price of 10 units
      const itemPrice = 13;
      return total + itemPrice;
    }, 0);

    setBillDetails({ ...billDetails, totalAmount });
  };

  return (
    <div className="generate-bill-container">
      <h2>Generate Bill</h2>
      <form>
        <label>
          Customer Name:
          <input
            type="text"
            value={billDetails.customerName}
            onChange={handleCustomerNameChange}
          />
        </label>
        <label>
          Items (comma-separated):
          <input
            type="text"
            value={billDetails.items.join(',')}
            onChange={handleItemsChange}
          />
        </label>
        <button type="button" onClick={calculateTotalAmount}>
          Generate Bill
        </button>
      </form>
      {billDetails.totalAmount > 0 && (
        <div className="bill-details">
          <h3>Phoenix Business</h3>
          <p>Customer Name: {billDetails.customerName}</p>
          <p>Items: {billDetails.items.join(', ')}</p>
          <p>Total Amount: ${billDetails.totalAmount}</p>
        </div>
      )}
    </div>
  );
}

export default GenerateBill;
