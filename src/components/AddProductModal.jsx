import React, { useState } from 'react';

const AddProductModal = ({ show, handleClose }) => {
  const [imageURL, setImageURL] = useState('');

  if (!show) {
    return null;
  }

  const handleImageChange = (event) => {
    setImageURL(event.target.value);
  };

  return (
    <div className="product-modal">
      <div className="product-modal-content">
        <h1>Add Product</h1>
        <form className="product-form">
          <div className="product-grid">
          {imageURL && (
              <div className="image-preview">
                <img src={imageURL} alt="Product" />
              </div>
            )}
            <div className="input-field">
              <label htmlFor="productImage">Product Image:</label>
              <input
                type="text"
                id="productImage"
                name="productImage"
                onChange={handleImageChange}
              />
            </div>
         

            <div className="input-field">
              <label htmlFor="productName">Product Name:</label>
              <input type="text" id="productName" name="productName" />
            </div>

            <div className="input-field">
              <label htmlFor="productId">Product ID:</label>
              <input type="text" id="productId" name="productId" />
            </div>

            <div className="input-field">
              <label htmlFor="category">Category:</label>
              <input type="text" id="category" name="category" />
            </div>

            <div className="input-field">
              <label htmlFor="price">Price:</label>
              <input type="text" id="price" name="price" />
            </div>

            <div className="input-field">
              <label htmlFor="quantity">Quantity:</label>
              <input type="text" id="quantity" name="quantity" />
            </div>

            <div className="input-field">
              <label htmlFor="unit">Unit:</label>
              <input type="text" id="unit" name="unit" />
            </div>

            <div className="input-field">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input type="text" id="expiryDate" name="expiryDate" />
            </div>

            <div className="input-field">
              <label htmlFor="thresholdValue">Threshold Value:</label>
              <input type="text" id="thresholdValue" name="thresholdValue" />
            </div>
          </div>

          <div className="product-modal-buttons">
            <button onClick={handleClose} className="discard-button">
              Discard
            </button>
            <button onClick={handleClose} className="add-product-button">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;