import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateProduct.css';
import { Link } from 'react-router-dom';

const UpdateProduct = ({ selectedProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    productName: selectedProduct?.productName || '',
    description: selectedProduct?.description || '',
    category: selectedProduct?.category || '',
    unitPrice: selectedProduct?.unitPrice || 0,
    stockQuantity: selectedProduct?.stockQuantity || 0,
    expirationDate: selectedProduct?.expirationDate || '',
    discount: selectedProduct?.discount || 0,
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Update the form fields when the selectedProduct prop changes
    setUpdatedProduct({
      productName: selectedProduct?.productName || '',
      description: selectedProduct?.description || '',
      category: selectedProduct?.category || '',
      unitPrice: selectedProduct?.unitPrice || 0,
      stockQuantity: selectedProduct?.stockQuantity || 0,
      expirationDate: selectedProduct?.expirationDate || '',
      discount: selectedProduct?.discount || 0,
    });
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const updateProduct = async () => {
    try {
      // Send the updated product data to the server
      await axios.put('http://localhost:9083/api/products/update', updatedProduct);
      console.log('Product updated successfully!');
      setUpdateSuccess(true);
      resetProductDetails();
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000); // Display success message for 3 seconds
    } catch (error) {
      console.error('Error updating product:', error);
      const message = 'Error updating product. Please try again.';
      setErrorMessage(message);
      alert(message);
    }
  };

  const resetProductDetails = () => {
    // Reset product details
    setUpdatedProduct({
      productName: '',
      description: '',
      category: '',
      unitPrice: 0,
      stockQuantity: 0,
      expirationDate: '',
      discount: 0,
    });
  };

  return (
    <>
    <div className="update-product-container">
      <h2>Update Product</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {updateSuccess && <div className="success-message">Update successful! Data cleared.</div>}
      <div>
        <Link to="/Check_Inventory">
          <button>Back</button>
        </Link>
      </div>
      <form>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={updatedProduct.productName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={updatedProduct.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={updatedProduct.category}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Unit Price:
          <input
            type="number"
            name="unitPrice"
            value={updatedProduct.unitPrice}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Stock Quantity:
          <input
            type="number"
            name="stockQuantity"
            value={updatedProduct.stockQuantity}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="date"
            name="expirationDate"
            value={updatedProduct.expirationDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Discount:
          <input
            type="number"
            name="discount"
            value={updatedProduct.discount}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={updateProduct}>
          Update Product
        </button>
      </form>
    </div>
    </>
  );
};

export default UpdateProduct;
