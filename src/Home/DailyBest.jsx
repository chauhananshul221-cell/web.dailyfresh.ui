import React from "react";
import deal1 from "..//assets/banner-deal1.jpg";
import product11 from "..//assets/product-img-11.jpg";
import product12 from "..//assets/product-img-12.jpg";
import product13 from "..//assets/product-img-13.jpg";
import { GoArrowRight } from "react-icons/go";
import StarRating from "../assets/StarRating";


function DailyBest() {
  return (
    <>
      <div className="w-[1296px] h-[500px] mx-auto mt-[100px] mb-[100px]">
        <h2 className="text-[30px] mb-[20px]">Daily Best Sells</h2>
        <div className="flex gap-[30px]">
          <div className="w-[348px] h-[470px]">
            <div className="relative">
              <a href="">
                <img src={deal1}></img>
              </a>
              <div className="absolute top-[30px] ml-[20px] text-white">
                <h2 className="w-[200px] text-[20px] font-bold">100% Organic Coffee Beans.</h2>
                <p>Get the best deal before close.</p>
                <div className="flex border border-[#5C6C75] bg-[#0aad0a] w-[124px] h-[41px] rounded-[10px] mt-[10px] items-center gap-[10px] p-2">
                <button className="">Shop Now</button>
                <GoArrowRight />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#5C6C75]  w-[308px] h-[468px]  rounded-[6px]">
            <div className="">
              <a href="">
                <img src={product11}  className="flex w-[220px] h-[220px] mx-auto"></img>
              </a>
              <div className="ml-[20px] mt-[25px]">
               <p>Tea, Coffee & Drinks</p>
                <h2>Roast Ground Coffee</h2>
                <div className="flex  gap-[100px]">
                   <h2> $13 $18</h2>
                   <StarRating rating={4.5}/>
                </div>
                <button className="border border-[#5C6C75] w-[260px] h-[41px] bg-[#0aad0a] mt-[30px] rounded-[10px] text-white">+ Add to cart</button>
                </div>


            </div>
          </div>

          <div className="border border-[#5C6C75] w-[308px] h-[468px]  rounded-[6px]">
            <div className="">
              <a href="">
                <img className="ml-[40px]" src={product12}></img>
              </a>
                <div className="ml-[20px] mt-[25px]">
               <p>Tea, Coffee & Drinks</p>
                <h2>Roast Ground Coffee</h2>
                <div className="flex  gap-[100px]">
                   <h2> $13 $18</h2>
                   <StarRating rating={4.5}/>
                </div>
                <button className="border border-[#5C6C75] w-[260px] h-[41px] bg-[#0aad0a] mt-[30px] rounded-[10px] text-white">+ Add to cart</button>
                </div>
            </div>
          </div>

          <div className="border border-[#5C6C75]  w-[308px] h-[468px]  rounded-[6px]">
            <div className="">
              <a href="">
                <img className="ml-[40px]" src={product13}></img>
              </a>
                <div className="ml-[20px] mt-[25px]">
               <p>Tea, Coffee & Drinks</p>
                <h2>Roast Ground Coffee</h2>
                <div className="flex  gap-[100px]">
                   <h2> $13 $18</h2>
                   <StarRating rating={4.5}/>
                </div>
                <button className="border border-[#5C6C75] w-[260px] h-[41px] bg-[#0aad0a] mt-[30px] rounded-[10px] text-white">+ Add to cart</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyBest;
