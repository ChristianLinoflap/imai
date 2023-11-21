import React, { useState } from 'react';
import Button, { styles } from './Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddProductModal from './AddProductModal'; // Import the AddProductModal component

const handleClick = () => {
  window.location.href = '/';
};

const Inventory = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className='Inventory-Grid'>
      <div style={{ marginInline: '20px'}}>
        <h2>Overall Inventory</h2>
      </div>
      <div className='Card-1'>
        <div className='Box-1'>
          <h3 id='Categories'>Total Categories</h3>
          <h3>25</h3>
        </div>
        <div className='Box-1'>
          <h3 id='Brands'>Total Brands</h3>
          <h3>18</h3>
        </div>
        <div className='Joined'>
          <div className='Sep-Box-1'>
            <h3 id='Products'>Total Products</h3>
            <h3>1200</h3>
          </div>
          <div className='Sep-Box-2'>
            <h3 id='Selling'>Top Selling Products</h3>
            <h3>350</h3>
          </div>
        </div>
      </div>
      <div className='Card-2'>
        <div className='Flexed'style={{ marginInline: '20px'}}>
          <h3>Products</h3>
          <div className='Product-Button'>
            <Button onClick={handleShowModal} buttonStyle={styles.button} title="Add Product" />
            <Button onClick={handleClick} buttonStyle={styles.button2} icon={<FilterListIcon />} title="Filters" />
            <Button onClick={handleClick} buttonStyle={styles.button2} title="Download All" />
          </div>
        </div>
        <div className="table-container" style={{ marginInline: '20px'}}>
          <table className="table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Buying Price</th>
                <th>Quantity</th>
                <th>Threshold Value</th>
                <th>Expiry Date</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maggi</td>
                <td>¥250</td>
                <td>43 Packets</td>
                <td>12 Packets</td>
                <td>11/12/22</td>
                <td>In-Stock</td>
              </tr>
              <tr>
                <td>Maggi</td>
                <td>¥250</td>
                <td>43 Packets</td>
                <td>12 Packets</td>
                <td>11/12/22</td>
                <td>In-Stock</td>
              </tr>
              <tr>
                <td>Maggi</td>
                <td>¥250</td>
                <td>43 Packets</td>
                <td>12 Packets</td>
                <td>11/12/22</td>
                <td>In-Stock</td>
              </tr>
              <tr>
                <td>Maggi</td>
                <td>¥250</td>
                <td>43 Packets</td>
                <td>12 Packets</td>
                <td>11/12/22</td>
                <td>In-Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AddProductModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Inventory;
