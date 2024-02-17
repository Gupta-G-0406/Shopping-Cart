import React from "react";
import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex flex-col border-b-2  border-b-black mb-6 ">
      <div className="flex  gap-5">
        <div className="h-[150px]">
          <img src={item.image} className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-bold">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-500 font-bold">${item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
