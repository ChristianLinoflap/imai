import React from 'react'
import Button, { styles } from './Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const handleClick = () => {
    window.location.href = '/';
    
    // You can add your desired functionality here
  };
function Cart(){
    const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','11','11','11','11','11','11','11','11','11','11']; // Example array of items

    return (
     
    <div className='Inventory-Grid'>
      <div style={{ marginInline: '20px'}}>
        <h2>Cart Overview</h2>
      </div>
          <div className='Cart-Grid'>
            <div className='Divider'>
              <div className='Cart-Button'>
                <Button onClick={handleClick} buttonStyle={styles.button} title="Add Cart" />
              </div>
              <div className='Card-1'>
                {items.map((item, index) => (
                <div key={index} className='Box-1'>
                <h2>CART</h2>   
                <h1 id={`item-${index}`} >{item}</h1  >
                <ShoppingCartOutlinedIcon style={{ margin: '0%', fontSize: 70, color: 'black' }} /> 
                </div>
              ))}
              </div>
            </div>
          </div>
    </div>

     
    );
}
export default Cart