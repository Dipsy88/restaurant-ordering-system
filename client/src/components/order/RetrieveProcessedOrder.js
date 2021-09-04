import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RetrieveProcessedOrder = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3002/process-orders').then(response => {
      setOrderList(response.data);
    });
  }, []);

  const completeOrder = id => {
    const runApi = async id => {
      await axios.put(`http://localhost:3002/complete-order/${id}`);

      setOrderList(
        orderList.filter(val => {
          return val.id !== id;
        })
      );
    };
    runApi(id);
  };

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
                <td>
                  <button
                    onClick={() => {
                      completeOrder(order.id);
                    }}
                  >
                    Complete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RetrieveProcessedOrder;
