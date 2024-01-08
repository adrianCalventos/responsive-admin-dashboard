import React from 'react';
import '../Order/order.css';

class Order extends React.Component {
    render() {
      return <tr>
                <td>{this.props.productName}</td>
                <td>{this.props.productNumber}</td>
                <td>{this.props.paymentStatus}</td>
                <td class={this.props.status === 'Declined' ? 'danger' : this.props.status === 'Pending' ? 'warning' : 'primary'}>
                    {this.props.status}
                </td>
                <td class="primary">Details</td>
            </tr>
    }
  }

export default Order;