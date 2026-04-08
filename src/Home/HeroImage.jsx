import React from "react";
import slider1 from "../assets/img background one.jpg";
import slider2 from "../assets/slider-2.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IoArrowForward } from "react-icons/io5";




function HeroImage() {
  
  const items = [
    // SLIDE 1
    <div className="relative">
      <img src={slider1} alt="slide1" className="w-full rounded-[10px]" />

      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-150">
        <div className="bg-yellow-500 text-sm font-bold mb-3 px-2 w-fit rounded">
          Opening Sale discount 50%
        </div>

        <h2 className="text-6xl font-semibold mb-3 text-gray-900">
          Super Market for Fresh Grocery
        </h2>

        <p className="text-lg text-black/60 mb-4">
          Introduced a new model for online grocery shopping and convenient home delivery.
        </p>

        <button className="bg-gray-900 text-white flex gap-2 px-4 py-2 rounded items-center">
          Shop Now <IoArrowForward />
        </button>
      </div>
    </div>,

    // SLIDE 2
    <div className="relative">
      <img src={slider2} alt="slide2" className="w-full rounded-[10px]" />

      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-150">
        <div className="bg-yellow-500 text-sm font-bold mb-3 px-2 w-fit rounded">
          Free Shipping - orders over $100
        </div>

        <h2 className="text-6xl font-semibold mb-3">
          Free Shipping on order over
          <span className="text-[#0aad0a]"> $100</span>
        </h2>

        <p className="text-lg text-[#5c6c75] mb-4">
          Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
        </p>

        <button className="bg-gray-900 text-white flex gap-2 px-4 py-2 rounded items-center">
          Shop Now <IoArrowForward />
        </button>
      </div>
    </div>,
  ];

  return (
    <>
  
    <div className="z-10 w-[1296px] mx-auto mt-8">
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
        />

      
      
    </div>
        </>
  );
} 

export default HeroImage;
