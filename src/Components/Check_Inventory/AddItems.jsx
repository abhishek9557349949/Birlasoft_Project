import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.png';
import '../Check_Inventory/AddItems.css';

const AddItems = () => {
  const [newProduct, setNewProduct] = useState({
    productName: '',
    description: '',
    category: '',
    unitPrice: '',
    stockQuantity: '',
    expirationDate: '',
    discount: '',
  });

  const addNewProduct = async () => {
    try {
      const response = await axios.post('http://localhost:9083/api/products/add', newProduct);
      console.log('Product added successfully:', response.data);
      alert('Product Added Successfully');
    } catch (error) {
      console.error('Error adding new product:', error.message);
      alert('Product Not Added');
    }
  };

  return (
    <div className="add-new-product-container">
        <header>
        <div className="logo"><img src={logo} className='logo' alt="logo" /></div>
        <nav>
          <ul>
            <li>
              <Link to="/Check_Inventory">Back</Link>
            </li>
          </ul>
        </nav>
      </header>

      <h2>Add New Product</h2>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={newProduct.productName}
          onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
      </div>
      <div>
        <label>Unit Price:</label>
        <input
          type="text"
          value={newProduct.unitPrice}
          onChange={(e) => setNewProduct({ ...newProduct, unitPrice: e.target.value })}
        />
      </div>
      <div>
        <label>Stock Quantity:</label>
        <input
          type="text"
          value={newProduct.stockQuantity}
          onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
        />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="date"
          value={newProduct.expirationDate}
          onChange={(e) => setNewProduct({ ...newProduct, expirationDate: e.target.value })}
        />
      </div>
      <div>
        <label>Discount:</label>
        <input
          type="text"
          value={newProduct.discount}
          onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
        />
      </div>
      <div>
        <button onClick={addNewProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AddItems;
