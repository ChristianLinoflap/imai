import React from 'react'
import Button, { styles } from './Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const handleClick = () => {
    window.location.href = '/';
    
    // You can add your desired functionality here
  };
function Reports_user(){
    return(
        <div className='Inventory-Grid'>
        <div style={{marginInline:'20px'}}>
        <h2>User Activity Logs</h2>
        </div>
      
        <div className='Card-2'>
        <div className='Flexed'style={{marginInline:'20px'}}>
            <h3>Activity Logs</h3>
        <div className='Product-Button'>
        <Button onClick={handleClick} buttonStyle={styles.button2} title="From: MM/DD/YY" />
        <Button onClick={handleClick} buttonStyle={styles.button2} title="To: MM/DD/YY" />
        <Button onClick={handleClick} buttonStyle={styles.button2} title="User Filters"   />
        <Button onClick={handleClick} buttonStyle={styles.button2} title="Download" />
        </div>
        </div>
       
        
        <div className="table-container"style={{marginInline:'20px'}}>
        <table className="table">
            <thead>
            <tr>
                <th>Date & Time</th>
                <th>User</th>
                <th>Activity</th>
                <th>Notes</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>10/10/2023 10:00</td>
                <td>Supervisor</td>
                <td>User Account Creation</td>
                <td>Created a new user account for an employee</td>
            </tr>
            <tr>
                <td>10/10/2023 10:00</td>
                <td>Supervisor</td>
                <td>User Account Creation</td>
                <td>Created a new user account for an employee</td>
            </tr>
            <tr>
                <td>10/10/2023 10:00</td>
                <td>Supervisor</td>
                <td>User Account Creation</td>
                <td>Created a new user account for an employee</td>
            </tr>
            <tr>
                <td>10/10/2023 10:00</td>
                <td>Supervisor</td>
                <td>User Account Creation</td>
                <td>Created a new user account for an employee</td>
            </tr>
            
            </tbody>
        </table>
        </div>
        </div>
    </div>
    )
}
export default Reports_user