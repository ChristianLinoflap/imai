import React from 'react'
import Button, { styles } from './Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const UserBut = () => {
    window.location.href = '/Reports-User';
  };
  const TransactionBut = () => {
    window.location.href = '/Reports-Transaction';
  };
function Reports(){
    return(
       
                <div className='Inventory-Grid'>
                <div style={{marginInline:'20px'}}>
                    <h2>Reports</h2>
                </div>
                <div className='Card-2'>
                    <div className='Flexed'style={{marginInline:'20px'}}>
                        <h2>Best Selling Products</h2>
                        <div className='Product-Button'>
                        <Button onClick={UserBut} buttonStyle={styles.normal} title="See All" />
                        </div>
                    </div>
                    <div className="table-container"style={{marginInline:'20px'}}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Products</th>
                                <th>Product ID</th>
                                <th>Category</th>
                                <th>Remaining Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Maggi</td>
                                <td>23567</td>
                                <td>Vegetable</td>
                                <td>225 kg</td>
                            </tr>
                            <tr>
                                <td>Maggi</td>
                                <td>23567</td>
                                <td>Vegetable</td>
                                <td>225 kg</td>
                            </tr>
                            <tr>
                                <td>Maggi</td>
                                <td>23567</td>
                                <td>Vegetable</td>
                                <td>225 kg</td>
                            </tr>
                            <tr>
                                <td>Maggi</td>
                                <td>23567</td>
                                <td>Vegetable</td>
                                <td>225 kg</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='Card-2'>
                    <div style={{justifyContent: 'space-between',marginInline:'10px',display:'flex'}}>
                        <h2>Profit & Revenue</h2>
                        <Button onClick={TransactionBut} buttonStyle={styles.button2} icon={<CalendarTodayIcon/>} title="Weekly" />
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-evenly',marginInline:'400px',marginTop:'20px'}}>
                    <Button onClick={UserBut} buttonStyle={styles.reports} title="User Activity Logs" />
                    <Button onClick={TransactionBut} buttonStyle={styles.reports} title="Transaction History" />
                </div>
            </div>
            
        

    )
}
export default Reports