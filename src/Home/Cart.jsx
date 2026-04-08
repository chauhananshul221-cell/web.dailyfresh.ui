import React from "react";
import Counter from "./Counter";
import DailyFresh from "../assets/Daily-fresh.png";

function Cart({ cart, close }) {
  return (
    <>
      <div className="">
        <div className="">
          <img src={DailyFresh} className="w-[870px] h-[700px]"></img>
        </div>
      </div>

      <div className="w-[660px] mx-auto mb-[20px]  bg-gray-100 fixed top-0 right-0 h-full z-50 overflow-y-auto p-4 rounded-[7px]">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="text-3xl font-bold">Shop Cart</h2>
            <p className="text-gray-400">Location in 382480</p>
          </div>
          <div className="">
            <h3 onClick={close} className="text-[30px] text-gray-600">
              X
            </h3>
          </div>
        </div>

        <div className=" w-[512px] h-[40px] mt-[20px] ">
          <p className=" border border-red-200 p-2  rounded-[7px] bg-red-200 text-red-400">
            You’ve got FREE delivery. Start checkout now!
          </p>
        </div>
        <div className="border-b border-gray-300 mt-[50px]"></div>
        {cart.length === 0 ? (
          <p className="mt-5">No items in cart</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 border-b border-gray-300 p-4 mt-4"
            >
              <img src={item.Image} width="100" />

              <div className="flex">
                <div className="">
                  <h3 className="font-bold">{item.name}</h3>
                  <p>${item.Price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="flex gap-[40px]">
                  <div>
                    <Counter />
                  </div>
                  <div className="mt-[40px]">
                    <p>Total: ${item.Price * item.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <div className="flex justify-between mt-[20px] mb-[50px]">
          <button className="bg-[#0aad0a] text-white p-2 rounded-[7px]">
            Continue Shopping
          </button>
          <button className="bg-[#0aad0a] text-white p-2 rounded-[7px]">
            Update Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
