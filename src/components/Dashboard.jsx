import React from "react";

function Dashboard() {
    return (
        <div className="dashboard-22313">
            <p>{"Welcome (User)"}</p>
            <div className="dashboard-contents">
                <div className="content-group-1">
                    <div className="sales-overview">
                        <p>Sales Overview</p>
                        <div className="content-container">
                            <div className="content">
                                <img src="/assets/sales.png" />
                                <div>
                                    <p>¥ 832</p>
                                    <p>Sales</p>
                                </div>
                            </div>

                            <div className="content">
                                <img src="/assets/revenue.png" />
                                <div>
                                    <p>¥ 832</p>
                                    <p>Revenue</p>
                                </div>
                            </div>
                            <div className="content">
                                <img src="/assets/profit.png" />
                                <div>
                                    <p>¥ 832</p>
                                    <p>Profit</p>
                                </div>
                            </div>
                            <div className="content">
                                <img src="/assets/costyen.png" />
                                <div>
                                    <p>¥ 832</p>
                                    <p>Cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="purchase-overview">
                        <p>Purchase Overview</p>
                        <div className="content-container">
                            <div className="content">
                                <img src="/assets/Purchase.png" />
                                <div>
                                    <p>¥ 832</p>
                                    <p>Purchase</p>
                                </div>
                            </div>

                            <div className="content">
                                <img src="/assets/Cost.png" />
                                <div>
                                    <p>¥ 832</p>
                                    <p>Cost</p>
                                </div>
                            </div>
                            <div className="content">
                                <img src="/assets/Categories.png" />
                                <div>
                                    <p>¥ 832</p>
                                    <p>Profit</p>
                                </div>
                            </div>
                            <div className="content">
                                <img src="/assets/Brands.png" />
                                <div>
                                    <p>¥ 832</p>
                                    <p>Cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-product">
                        <p>Top Selling Product</p>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Sold Quantity</th>
                                <th>Remaining Quantity</th>
                                <th>Price</th>
                            </tr>
                            <tr>
                                <td>Surf</td>
                                <td>32</td>
                                <td>42</td>
                                <td>¥ 832</td>
                            </tr>
                            <tr>
                                <td>Rin</td>
                                <td>42</td>
                                <td>15</td>
                                <td>¥ 832</td>
                            </tr>
                            <tr>
                                <td>Parle G</td>
                                <td>12</td>
                                <td>32</td>
                                <td>¥ 832</td>
                            </tr>
                            <tr>
                                <td>Honey</td>
                                <td>32</td>
                                <td>51</td>
                                <td>¥ 832</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="content-group-2">
                    <div className="low-quantity">
                        <p>Low Quantity Stocks</p>
                        <div className="content-container">
                            <div className="content">
                                <div>
                                    <h2>Tata Salt</h2>
                                    <p>
                                        Remaining Quantity:<span>10</span>
                                    </p>
                                </div>
                                <p>Low</p>
                            </div>
                            <div className="content">
                                <div>
                                    <h2>Lays</h2>
                                    <p>
                                        Remaining Quantity:<span>10</span>
                                    </p>
                                </div>
                                <p>Low</p>
                            </div>
                            <div className="content">
                                <div>
                                    <h2>Maggi</h2>
                                    <p>
                                        Remaining Quantity:<span>10</span>
                                    </p>
                                </div>
                                <p>Low</p>
                            </div>
                            <div className="content">
                                <div>
                                    <h2>Box</h2>
                                    <p>
                                        Remaining Quantity:<span>10</span>
                                    </p>
                                </div>
                                <p>Low</p>
                            </div>
                        </div>
                    </div>
                    <div className="low-quantity">
                        <p>Least Selling Product</p>
                        <div className="content-container">
                            <div className="content">
                                <div>
                                    <h2>Tata Salt</h2>
                                    <p>
                                        Sold Quantity: <span> 10 Pax</span>
                                    </p>
                                </div>
                                <p>¥ 8</p>
                            </div>
                            <div className="content">
                                <div>
                                    <h2>Lays</h2>
                                    <p>
                                        Sold Quantity: <span> 2 Pax</span>
                                    </p>
                                </div>
                                <p>¥ 8</p>
                            </div>
                            <div className="content">
                                <div>
                                    <h2>Maggi</h2>
                                    <p>
                                        Sold Quantity: <span> 3 Pax</span>
                                    </p>
                                </div>
                                <p>¥ 2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;

{
    /* <div className="Split-Dash">
            <div className="Left-Dash">
                <div className="Left-Grid-Dash">
                    <div className="Card-1">
                        <h2>Sales Overview</h2>
                        <div className="content">
                        </div>
                    </div>
                    <div className="Card-2">
                        <h2>Purchase Overview</h2>
                        <div className="content"></div>
                    </div>
                    <div className="Card-3">
                        <h2>Top Selling Product</h2>
                        <div className="content"></div>
                    </div>
                </div>
                </div>
            <div className="Right-Dash">
                <div className="Right-Grid-Dash">
                    <div className="Card-1">
                        <h2>Low Quantity Stock</h2>
                        <div className="content"></div>
                    </div>
                    <div className="Card-2">
                        <h2>Least Selling Product</h2>
                        <div className="content"></div>
                    </div>
                </div>
            </div>
        </div> */
}
