import React, { useState } from 'react';
import axios from 'axios';
import OrderItemList from './OrderItemList';

const Order = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  let order = [''];
  const orders = orderList => {
    order = orderList;
  };

  const saveOrder = e => {
    const items = order.join(';');

    axios
      .post('http://localhost:3002/create', {
        name,
        phone,
        email,
        order: items,
      })
      .then(() => {
        alert('Order successfully registered');
      })
      .catch(error => {
        alert('Something went wrong');
        console.log(error);
      });
  };

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={saveOrder}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone number</label>
          <input
            type="number"
            placeholder="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <OrderItemList orders={orders} />
        <br />
        <button className="ui button">Save Order</button>
      </form>
    </div>
  );
};

export default Order;
