import React from "react";
import Fruit from "..//assets/grocery-banner-1.png";
import Vegetable from "..//assets/grocery-banner-2.jpg";

function Banner() {
  const Fruitvegs = [
    {
      id: 1,
      title: "Fruits & Vegetables",
      discount: "Get Upto 30% Off",
      buttonText: "Shop Now",
      Image: Fruit,
    },

    {
      id: 2,
      title: "Freshly Baked Buns",
      discount: "Get Upto 25% Off",
      buttonText: "Shop Now",
      Image: Vegetable,
    },
  ];
  return (
      <>
        <div className=" w-[1296px]  mx-auto flex gap-[10px] mt-[60px]">
          {Fruitvegs.map((items) => (
                <div key={items.id}>
            <div className="relative ">
              <div className="">
                <img src={items.Image} alt={items.title} className="w-[787px] h-[220px] "/>
              </div>
              <div className="absolute top-[60px] ml-[40px]">
              <div className="font-bold text-[24px]">
                <h2 className="">{items.title}</h2>
              </div>
              <div className="">
                <p className="text-gray-500">{items.discount}</p>
              </div>
              <div className="border border-black w-[90px] h-[40px] rounded-[6px] mt-[15px] bg-[#001e2f] text-white border-none p-2">
                <button>{items.buttonText}</button>
              </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </>
  );
}

export default Banner;
