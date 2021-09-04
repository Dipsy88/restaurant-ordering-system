import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RetrieveOrder = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3002/orders').then(response => {
      setOrderList(response.data);
    });
  }, []);

  const deleteEmployee = id => {
    const deleteOrder = async id => {
      await axios.put(`http://localhost:3002/process-order/${id}`);

      setOrderList(
        orderList.filter(val => {
          return val.id !== id;
        })
      );
    };
    deleteOrder(id);
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
                      deleteEmployee(order.id);
                    }}
                  >
                    Process
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

export default RetrieveOrder;
