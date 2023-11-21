import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header(){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
    setInputValue(event.target.value);
    };

    return(
<div className='Header'>
 
    <div className='Search'>
    <input
        className="text-input" 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search product, brand, category"/>
    </div> 
    <div className='Profile'>
        <h3 id='NotifBell'><NotificationsIcon/></h3>
        <h3 id='Profile'>Profile</h3>
    </div>
</div>
    )
}
export default Header