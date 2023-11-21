import React from 'react'

function Dashboard(){
    return(
            <div className='Split-Dash'>
            <div className='Left-Dash'>
                <div className='Left-Grid-Dash'>
                    <div className='Card-1'>
                        <h2>Sales Overview</h2>
                    </div>
                    <div className='Card-2'>
                        <h2>Purchase Overview</h2>
                    </div>
                    <div className='Card-3'>
                        <h2>Top Selling Product</h2>
                    </div>
                </div>
                {/* <h2>Left</h2> */}
            </div>
            <div className='Right-Dash'>
                <div className='Right-Grid-Dash'>
                    <div className='Card-1'>
                        <h2>Low Quantity Stock</h2>
                    </div>
                    <div className='Card-2'>
                        <h2>Least Selling Product</h2>
                    </div>
                </div>
            </div>
        </div>
    
        

    )
}
export default Dashboard