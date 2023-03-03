import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CardItem";


import DetailsBill from "./DetailesBill";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const items = cartItems.filter((item) => item.quantity > 0);
  const totalPrice = items
    .map((item) => item.quantity * item.price)
    .reduce((p, c) => p + c, 0);
  return (
    <>
      {items.length === 0 ? (
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              <h1>No Items Found</h1>

              {/* <!-- Cart Items Ends --> */}
            </div>

            {/* <!-- Bill Details --> */}
            <DetailsBill/>
          </div>
        </div>
      ) : (
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              {items?.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              {/* <!-- Cart Items Ends --> */}
            </div>

            {/* <!-- Bill Details --> */}
            <DetailsBill price={totalPrice} />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
