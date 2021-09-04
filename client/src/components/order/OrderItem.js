import React from 'react';

const OrderItem = ({ changeItems, i, item }) => {
  const onChange = e => {
    changeItems(i, e);
  };
  return (
    <div className="field">
      <label>Order {i === 0 ? '' : i + 1}</label>
      <input type="text" value={item} onChange={onChange} />
    </div>
  );
};

export default OrderItem;
