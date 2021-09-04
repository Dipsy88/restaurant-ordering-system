import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RetrieveCompletedOrder = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3002/complete-orders').then(response => {
      setOrderList(response.data);
    });
  }, []);

  return (
    <div>
      <table className="ui selectable basic table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map(order => {
            return (
              <tr key={order.id}>
                <td className="selectable">
                  <a href={`/update-order/${order.id}`}>{order.name}</a>
                </td>
                <td className="selectable">
                  <a href={`/update-order/${order.id}`}>{order.phone}</a>
                </td>
                <td className="selectable">
                  <a href={`/update-order/${order.id}`}>{order.email}</a>
                </td>
                <td className="selectable">
                  <a href={`/update-order/${order.id}`}>{order.order_items}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RetrieveCompletedOrder;
