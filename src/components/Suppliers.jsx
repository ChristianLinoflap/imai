import React from 'react'
import Button, { styles } from './Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Suppliers(){
    return(

           
       
    
        <div className='Supplier-Dash'>
            <div style={{marginInline:'20px'}}>
            <h2>Suppliers</h2>
            </div>
    
        <div className='Left-Dash'>
        
            <div className='Card-1'>
                <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Supplier Name</th>
                        <th>Contact Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                    </tr>
                    
                    </tbody>
                </table>
                </div>
            <div className='Flexed'>
            <div>
            <Button buttonStyle={styles.button2} style={{width:'30%'}} title="Previous" />
            </div>
                <h3 style={{width:'30%'}}>Page 1 of 10</h3>
            <div >
            <Button style={{width:'30%'}} buttonStyle={styles.button2} title="Next" />
            </div>
            </div>
            </div>
            
      



        




            <div className='Card-2'>
            <div className='Flexed'>
                <div>
                    <h3>Linoflap</h3>
                </div>
                <div style={{display:'flex',margin:'0px',height:'50px'}}>
                <Button buttonStyle={styles.button2}  title="Edit" />
                <Button buttonStyle={styles.button2} title="Delete" />
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between' ,marginInline:'80px',marginTop:'20px'}}>
            <div style={{display:'grid',}}>
            <h3>Contact Person</h3>
            <h3>Email</h3>
            <h3>Products Supplied</h3>
            </div>
            <div style={{display:'grid'}}>
            <input
                    className="text-input" 
                    type="text"
                    value={'Richard Jones'}
                    onChange={'handleInputChange'}
                    placeholder="Search product, brand, category"/>
            <input
                    className="text-input" 
                    type="text"
                    value={'richard@linoflap.com'}
                    onChange={'handleInputChange'}
                    placeholder="Search product, brand, category"/>
            <input
                    className="text-input" 
                    type="text"
                    value={'Kitkat Brownies'}
                    onChange={'handleInputChange'}
                    placeholder="Search product, brand, category"/>
            </div>
            </div>
       
            <div style={{display:'flex',justifyContent:'flex-end',marginTop:'80px'}}>
                <div style={{display:'flex',margin:'0px',height:'50px'}}>
                <Button buttonStyle={styles.button}  title="Discard" />
                <Button buttonStyle={styles.button} title="Apply" />
                </div>
            </div>
             
         
            </div>
        </div>
    </div>
    )
}
export default Suppliers