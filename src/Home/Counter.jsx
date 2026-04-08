import React, { useState } from "react";

function Counter() {
  const [Products, setProducts] = useState(0);

  

  return (
    <div className="flex  text-gray-700 mt-[40px]">
      <div className="">
        <button
          className=" border-2 w-[30px] h-[30px] p-4 items-center justify-center flex"
          onClick={() => setProducts(Products - 1)}
        >
          -
        </button>
      </div>
      <div className="">
        <div className=" border-2 w-[30px] h-[30px] p-4 items-center justify-center flex">
          {Products}
        </div>
      </div>
      <div className="">
        <button
          className=" border-2 w-[30px] h-[30px] p-4 items-center justify-center flex"
          onClick={() => setProducts(Products + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
