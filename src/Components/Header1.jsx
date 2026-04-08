// import React from "react";
import { useState } from "react";
import Daily from "../assets/Daily-Fresh.jpg";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Loaction from "../Home/Loaction";


function Header1() {
    const [showLocation, setShowLocation] = useState(false);
  return (
    <>
      <div className="max-w-[1290px] h-[80px] mx-auto  mt-[30px] flex items-center  mb-[30px]">
        <div className="flex justify-between w-full items-center">
          <div className="w-[170px] flex items-center">
            <a href="">
              <img src={Daily}></img>
            </a>
          </div>

          <div className="flex gap-[30px] mr-[190px] ">
            <div className="">
              <div className=" flex relative justify-center items-center ">
                <input 
                  className="w-[528px] h-[41px] border border-[#5C6C75] p-2 relative rounded-[10px] "
                  type=""
                  name=""
                  placeholder="search for products "
                />
                <CiSearch className="absolute mx-auto right-[15px]"/>
              </div>
            </div>

            <div className="border border-[#5C6C75] rounded-[10px] w-[117px] h-[41px] justify-center items-center p-2" 
            onClick={() => setShowLocation(true)}
            >
               
              <div className="flex gap-[10px] items-center">
                <CiLocationOn className="text-[18px]" />
                <h2 className="text-[#5C6C75]">Loaction </h2>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-[20px] text-[30px] text-[#5C6C75]">
              <CiHeart />


             <Link to="/signup">
             <CiUser/>
             </Link>
              
              <Link to="/cart">
                <RiShoppingBag3Line />
              </Link>
            
            </div>
          </div>
        </div>
      </div>

       {showLocation && (
        <Loaction close={() => setShowLocation(false)}/>
      )}
    </>
  );
}

export default Header1;


              