import React, { useEffect, useState } from 'react';
import OrderItem from './OrderItem';

const OrderItemList = ({ orders, orderList }) => {
  const [orderItems, setOrderItems] = useState(['']);

  useEffect(() => {
    if (typeof orderList !== 'undefined') {
      setOrderItems(orderList);
      orders(orderList);
    }
  }, [orderList]);

  const changeItems = (i, e) => {
    setOrderItems(
      orderItems.map((order, j) => {
        if (i === j) {
          order = e.target.value;
        }
        return order;
      })
    );
  };

  useEffect(() => {
    orders(orderItems);
  }, [orderItems]);

  const retItems = orderItems.map((item, i) => {
    return <OrderItem key={i} i={i} changeItems={changeItems} item={item} />;
  });

  return (
    <div>
      {retItems}
      <button
        type="button"
        onClick={() => setOrderItems(orderItems.concat(''))}
      >
        Add another item
      </button>
    </div>
  );
};

export default OrderItemList;
