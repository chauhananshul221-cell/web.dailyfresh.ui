import React from "react";
import { useNavigate } from "react-router-dom";

function Loaction({ close }) {
  return (
    <>
      <div className=" fixed  inset-0 w-[450px] h-[510px] mx-auto bg-[#fff] p-4 rounded-[6px]   z-50  justify-center items-center mt-[50px]">
        <div className="flex items-center justify-center">
          <div className="">
            <h2 className="font-semibold text-[25px]">Choose your Delivery Location</h2>
            <p>Enter your address and we will specify the offer you area</p>
          </div>
          <button onClick={close} className=" w-[20px] text-[20px] bg-gray-300 rounded-[5px]">X</button>
          
        </div>

        <div className="mt-[30px]">
          <input
            type="text"
            name="name"
            placeholder="search your area"
            className="border border-black w-[400px] h-[35px] rounded-[5px] p-2 "
          ></input>
        </div>

        <div className="flex justify-between mt-[40px]">

          <div className="flex flex-col leading-7">
            <h2 className="mb-[10px] font-semibold">Select Location</h2>
            <a href="">Alabama</a>
            <a href="">Alaska</a>
            <a href="">Arizona</a>
            <a href="">Califfornia</a>
            <a href="">Colorado</a>
            <a href="">florida</a>
            <a href="">Califfornia</a>
            <a href="">Colorado</a>
            <a href="">florida</a>
            <a href="">Arizona</a>
          </div>

          <div className="flex flex-col leading-7 ">
            <button className="border border-black w-[80px] h-[30px] rounded-[6px] mb-[10px] ">clear All </button>
            <a href="">Min:$20</a>
            <a href="">Min:$30</a>
            <a href="">Min:$50</a>
            <a href="">Min:$29</a>
            <a href="">Min:$80</a>
            <a href="">Min:$90</a>
            <a href="">Min:$50</a>
            <a href="">Min:$29</a>
            <a href="">Min:$80</a>
            <a href="">Min:$90</a>
          </div>

        </div>
     </div>
    </>
  );
}

export default Loaction;
