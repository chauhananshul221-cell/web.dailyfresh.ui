import React from "react";
import { Link } from "react-router-dom";
import Shapes from "../assets/about-img sahape.jpg";
import About1 from "../assets/about-icons-1.svg";
import About2 from "../assets/about-icons-2.svg";
import About3 from "../assets/about-icons-3.svg";
import Header1 from "../Components/Header1";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function Aboutpages() {
  const services = [
    {
      id: 1,
      title: "Grow my business with Freshcart",
      description:
        "Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.",
      button: "FreshCart Platform",
      image: About1,
    },
    {
      id: 2,
      title: "Advertise my brand on Freshcart",
      description:
        "Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.",
      button: "FreshCart ads",
      image: About2,
    },
    {
      id: 3,
      title: "Learn more about Freshcart",
      description:
        "Vivamus non risus id sapien egestas tempus id sed lla mus justo metus, suscipit non hendrerit.",
      button: "Learn More",
      image: About3,
    },
  ];
  return (
    <>
      <Header1 />
      <Header2 />
      <div className="w-[1290px] mx-auto  mt-[40px] mb-[100px]">
        <div className="flex justify-around items-center ">
          <div className="">
            <div className="text-[35px] font-bold leading-11">
              <h2>The Future of </h2>
              <h2>Grocery Delivery:</h2>
            </div>
            <div className="text-gray-400 mt-[20px] text-[20px]">
              <p>By powering the future of grocery with</p>
              <p>our retail partners, we give everyone</p>
              <p>access to the food they love and more</p>
              <p>time to enjoy it together.</p>
            </div>
          </div>
          <Link to="">
            <img
              className="
            rounded-[5px]"
              src={Shapes}
            ></img>
          </Link>
        </div>
      </div>
      <div className="w-[1100px] mx-auto ">
        <h2 className="text-[28px] font-bold mb-[30px] text-[#21313C]">
          Ready to get started?
        </h2>
        <div className="grid grid-cols-3 gap-[20px] ">
          {services.map((items) => (
            <div
              key={items.id}
              className="w-[334px] h-[391px] bg-[#dfe2e1] rounded-[7px] "
            >
              <div className="mt-[30px] ml-[30px] p-2">
                <img src={items.image} alt={items.title}></img>
                <h className="text-[21px] font-bold w-75 text-[#21313C]">
                  {items.title}
                </h>
                <p className="mt-[10px]  text-[#5C6C75]">{items.description}</p>
                <button className="border border-black text-white bg-[#001e2b] text-[14px] p-2 rounded-[7px] mt-[15px]">
                  {items.button}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-7.5 text-[#5C6C75]">
          For assistance using Freshcart services, please visit our
          <span className="text-green-700"> Help Center</span>
        </p>
      </div>

      <div className="bg-[#198754] w-380 h-[432px]  py-[80px]">
        <div className="w-[1100px] mx-auto">
          <div className="text-white  ">
            <div className="text-[28px] font-bold">
              <h2>Trusted by retailers.</h2>
              <h2>Loved by customers.</h2>
            </div>
            <div className="text-[14px]">
              <p>We give everyone access to the food they</p>
              <p>love and more time to enjoy it together.</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between text-[48px] mt-[40px]">
              <h2>500k</h2>
              <h2>4,500+</h2>
              <h2>40k+</h2>
              <h2>650 +</h2>
            </div>
            <div className="flex justify-between text-[14px]">
              <p>Shoppers</p>
              <p>Cities</p>
              <p>Stores</p>
              <p>Retail Brands</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Aboutpages;
