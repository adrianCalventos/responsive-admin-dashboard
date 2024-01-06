import React from 'react';
import Order from './Order/order';
import ordersData from '../data/orderList';
import '../Orders/orders.css';

class Orders extends React.Component {
    render() {
      return  <div class="recent-orders">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((orderItem) => (
                            <Order 
                                productName={orderItem.productName}
                                productNumber={orderItem.productNumber}
                                paymentStatus={orderItem.paymentStatus}
                                status={orderItem.status}
                                />
                            ))}
                    </tbody>
                </table>
                <a href="#">Show All</a>
              </div>
    }
  }

export default Orders;