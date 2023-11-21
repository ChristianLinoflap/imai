import React from 'react'
import Button, { styles } from './Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const handleClick = () => {
    window.location.href = '/';
    
    // You can add your desired functionality here
  };
function ManageStore(){
    return(
    <div className='Inventory-Grid'>
    <div style={{marginInline:'20px'}}>
    <h2 >Manage Store</h2>
    </div>
    <div className='Card-2'>
    <div className='Flexed' style={{marginInline:'20px'}}>
    <h3>Manage Store</h3>
    <div className='Product-Button'>
    <Button onClick={handleClick} buttonStyle={styles.button} title="Add Store" />
    </div>
    </div>
    <div style={{paddingBottom: '10px',marginInline:'20px'}}>
    <div className="Manage-Card">
    <div className='Manage-Card2'>
    <div className="image-box">
    <div className="text">Balintawak Branch</div>
    <img src="https://placehold.co/600x400" alt="placeholder" className="image"/>
    </div>
    <div className='Combined-Text' >
    <h2>Landers</h2>
    <h5>1240 Epifanio de los Santos Ave</h5>
    <h5>Balintawak, Quezon City, 1106 Metro Manila</h5>
    <h5>044-653578</h5>
    </div>
    </div>

    <Button onClick={handleClick} buttonStyle={styles.edit} title="Edit" />
    </div>

    <div className="Manage-Card">
    <div className='Manage-Card2'>
    <div className="image-box">
    <div className="text">Balintawak Branch</div>
    <img src="https://placehold.co/600x400" alt="placeholder" className="image"/>
    </div>
    <div className='Combined-Text' >
    <h2>Landers</h2>
    <h5>1240 Epifanio de los Santos Ave</h5>
    <h5>Balintawak, Quezon City, 1106 Metro Manila</h5>
    <h5>044-653578</h5>
    </div>
    </div>

    <Button onClick={handleClick} buttonStyle={styles.edit} title="Edit" />
    </div>
    <div className="Manage-Card">
    <div className='Manage-Card2'>
    <div className="image-box">
    <div className="text">Balintawak Branch</div>
    <img src="https://placehold.co/600x400" alt="placeholder" className="image"/>
    </div>
    <div className='Combined-Text' >
    <h2>Landers</h2>
    <h5>1240 Epifanio de los Santos Ave</h5>
    <h5>Balintawak, Quezon City, 1106 Metro Manila</h5>
    <h5>044-653578</h5>
    </div>
    </div>

    <Button onClick={handleClick} buttonStyle={styles.edit} title="Edit" />
    </div>
    </div>

    </div>
    </div>
    )
}
export default ManageStore