import React from "react";
import clock1 from '..//assets/clock 1.svg'
import gift2 from '..//assets/gift2.svg'
import package3 from '..//assets/package3.svg'
import refresh4 from '..//assets/refresh-cw4.svg'

function Details() {
  return (
    <>
      <div className="w-[1296px] h-[200px] mx-auto mb-[50px]">
        <div className="flex gap-[25px] ">

            <div className="">
                <img src={clock1}></img>
                <h2 className="text-2xl mt-[20px] mb-[10px]">10 minute grocery now</h2>
                <div className="">
                  <p>Get your order delivered to your doorstep at</p>
                  <p>the earliest from FreshCart pickup stores</p>
                  <p>near you.</p>
                </div>
            </div>

            <div className="">
                <img src={gift2}></img>
                <h2 className="text-2xl mt-[20px]  mb-[10px]">Best Prices & Offers</h2>
                <div className="">
                  <p>Cheaper prices than your local supermarket,</p>
                  <p>great cashback offers to top it off. Get best</p>
                  <p>pricess & offers.</p>
                </div>
            </div>

            <div className="">
                <img src={package3}></img>
                <h2 className="text-2xl mt-[20px]  mb-[10px]">Wide Assortment</h2>
                <div className="">
                  <p>Choose from 5000+ products across food,</p>
                  <p>personal care, household, bakery, veg and</p>
                  <p>non-veg & other categories.</p>
                </div>
            </div>

            <div className="">
                <img src={refresh4}></img>
                <h2 className="text-2xl mt-[20px]  mb-[10px]">Easy Returns</h2>
                <div className="">
                  <p>non-veg & other categories.</p>
                  <p>doorstep & get a refund within hours. No</p>
                  <p>questions asked <span className="text-green-600"> policy</span> .</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Details;
