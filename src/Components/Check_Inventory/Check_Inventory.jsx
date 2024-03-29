import React, { useState, useEffect } from 'react';
import './Check_Inventory.css';
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.png';
import UpdateProduct from './UpdateProduct';

const Check_Inventory = () => {
  const [inventoryDetails, setInventoryDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(1);

  useEffect(() => {
    // Fetch inventory data from your API
    fetch('http://bsnodl-15122.birlasoft.com:9083/lookup/inventoryDetails')
      .then((response) => response.json())
      .then((data) => setInventoryDetails(data.inventoryDetails))
      .catch((error) => console.error('Error fetching inventory data:', error));
  }, []);

  const handleUpdateButtonClick = (product) => {
    setSelectedProduct(product);
    setEditedProduct({ ...product }); // Create a copy of the product for editing
  };

  const handleCancelClick = () => {
    setSelectedProduct(null);
    setEditedProduct(null); // Reset the edited product
  };

  const handleUpdateClick = () => {
    // API endpoint for updating product details
    const apiUrl = 'http://localhost:9083/api/products/update';

    // Make a PUT request to update the product details
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedProduct),
    })
      .then((response) => {
        if (response.ok) {
          alert('Product details updated successfully.');
          // Refresh inventory data after the update
          fetchInventoryData();
        } else {
          alert('Failed to update product details.');
        }
      })
      .catch((error) => {
        console.error('Error updating product details:', error);
      })
      .finally(() => {
        setSelectedProduct(null);
        setEditedProduct(null);
      });
  };

  const handleDeleteClick = (productName) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this item permanently?');
    if (isConfirmed) {
      // API endpoint for deleting a product
      const apiUrl = `http://localhost:9083/api/products/delete/${productName}`;

      // Make a DELETE request to delete the product
      fetch(apiUrl, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            alert('Product deleted successfully.');
            // Refresh inventory data after the delete
            fetchInventoryData();
          } else {
            alert('Failed to delete product.');
          }
        })
        .catch((error) => {
          console.error('Error deleting product:', error);
        });
    }
  };

  const handleInputChange = (field, value) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const fetchInventoryData = () => {
    // You can use this function to refresh the inventory data after an update or delete
    fetch('http://bsnodl-15122.birlasoft.com:9083/lookup/inventoryDetails')
      .then((response) => response.json())
      .then((data) => setInventoryDetails(data.inventoryDetails))
      .catch((error) => console.error('Error fetching inventory data:', error));
  };

  return (
    <div className='body'>
      <header>
        <div className="logo"><img src={logo} className='logo' alt="logo" /></div>
        <nav>
          <ul>
            <li>
              <Link to="/owner-home">Back</Link>
            </li>
            <li className="dropdown">
              <span className="dropbtn">Hi Chinki</span>
              <div className="dropdown-content">
                <Link to="/">Logout</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <h1>Inventory Details</h1>

      <section className="manage-bill">
        <div className="search-bar">
          <input type="text" placeholder="Search by Product Name" />
          <button>Search</button>
        </div>
        <Link to="/add">
          <button className="add-item-button">Add New Item</button>
        </Link>
        <div className="bill-list">
          {inventoryDetails.map((product, index) => (
            <div className="bill-item" key={index}>
              <div className="bill-info">
                <p className="customer-name">
                  <span>Product Name: </span>
                  {selectedProduct === product ? (
                    <input
                      type="text"
                      value={editedProduct.productName}
                      onChange={(e) => handleInputChange('productName', e.target.value)}
                    />
                  ) : (
                    product.productName
                  )}
                </p>
                <p className="date">
                  <span>Unit Price: </span>
                  {selectedProduct === product ? (
                    <input
                      type="text"
                      value={editedProduct.unitPrice}
                      onChange={(e) => handleInputChange('unitPrice', e.target.value)}
                    />
                  ) : (
                    `$${product.unitPrice}`
                  )}
                </p>
                <p className="bill-id">
                  <span>Stock Quantity: </span>
                  {selectedProduct === product ? (
                    <input
                      type="text"
                      value={editedProduct.stockQuantity}
                      onChange={(e) => handleInputChange('stockQuantity', e.target.value)}
                    />
                  ) : (
                    product.stockQuantity
                  )}
                </p>
                <p className="total-amount">
                  <span>Expiration Date: </span>
                  {selectedProduct === product ? (
                    <input
                      type="text"
                      value={editedProduct.expirationDate}
                      onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                    />
                  ) : (
                    product.expirationDate
                  )}
                </p>
                <p className="discount">
                  <span>Discount: </span>
                  {selectedProduct === product ? (
                    <input
                      type="text"
                      value={editedProduct.discount}
                      onChange={(e) => handleInputChange('discount', e.target.value)}
                    />
                  ) : (
                    `${product.discount}%`
                  )}
                </p>
                <p className="order-status">
                  <span>Order Status: </span>
                  {selectedProduct === product ? (
                    <input
                      type="text"
                      value={editedProduct.orderStatus}
                      onChange={(e) => handleInputChange('orderStatus', e.target.value)}
                    />
                  ) : (
                    product.orderStatus
                  )}
                </p>
                {selectedProduct === product ? (
                  <>
                    <button className="add-item-button" onClick={handleUpdateClick}>
                      Update
                    </button>
                    <button className="add-item-button" onClick={handleCancelClick}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <div className="button-container">
                    <button className="add-item-button" onClick={() => handleUpdateButtonClick(product)}>
                      Edit
                    </button>
                    <button className="add-item-button" onClick={() => handleDeleteClick(product.productName)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <UpdateProduct selectedProduct={selectedProduct} onUpdateModalSubmit={handleUpdateClick} />
    </div>
  );
};

export default Check_Inventory;
