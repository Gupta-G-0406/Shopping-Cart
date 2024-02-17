import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="w-8/12 mx-auto mt-5">
      {cart.length > 0 ? (
        <div className="flex justify-between border-b-4 gap-10">
          <div className="w-1/2 ">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="text-green-500 font-semibold text-md uppercase">
                Your Cart
              </div>
              <div className="font-bold text-2xl uppercase text-green-500 mb-4">
                Summary
              </div>
              <p className="font-semibold text-md">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p className="font-semibold text-md mb-2">
                Total Amount: ${totalAmount}
              </p>
              <button className="text-white-500 bg-green-600 font-bold text-white rounded-full p-1">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col  items-center  gap-y-5">
          <h1>Your Cart is Empty</h1>
          <NavLink to="/">
            <button className="text-white-500 bg-green-600 font-bold text-white rounded-md py-1 px-8">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
