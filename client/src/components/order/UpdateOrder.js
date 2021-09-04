import axios from 'axios';
import React, { useState, useEffect } from 'react';
import OrderItemList from './OrderItemList';

const UpdateOrder = props => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderList, setOrderList] = useState(['']);
  const [order, setOrder] = useState(['']);
  const id = props.match.params.id;

  const orders = orderItems => {
    setOrder(orderItems);
  };

  const updateOrder = e => {
    e.preventDefault();
    const items = order.join(';');

    axios
      .put(`http://localhost:3002/update/${id}`, {
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
        e.preventDefault();
      });
  };

  useEffect(() => {
    const getOrder = async id => {
      const response = await axios.get(
        `http://localhost:3002/update-order/${id}`
      );
      const orderIn = await response.data[0];
      setName(orderIn.name);
      setPhone(orderIn.phone);
      setEmail(orderIn.email);
      setOrderList(orderIn.order_items.split(';'));
    };
    getOrder(id);
  }, [id]);

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={updateOrder}>
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
        <OrderItemList orders={orders} orderList={orderList} />
        <br />
        <button className="ui button">Update Order</button>
      </form>
    </div>
  );
};

export default UpdateOrder;
