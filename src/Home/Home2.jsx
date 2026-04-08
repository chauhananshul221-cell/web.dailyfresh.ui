// import React from "react";
import Daily from "../assets/Daily-Fresh.jpg";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { PiSquaresFourBold } from "react-icons/pi";
import Menu from "..//assets/menu-banner1.jpg"
import { IoIosArrowForward } from "react-icons/io";
import About from "../assets/about-icons-1.svg";
import Adbanner from "../assets/ad-banner-1.jpg";
import Adbanner2 from "../assets/ad-banner-2.jpg";
import Adbanner3 from "../assets/ad-banner-3.jpg";

import Snack  from '../assets/category-snack-munchies_1.jpg'
import Bakery  from '../assets/category-bakery-biscuits_2.jpg'
import Instant  from '../assets/category-instant-food_3.jpg'
import tea from '../assets/category-tea-coffee-drinks_4.jpg'
import Ata from '../assets/category-atta-rice-dal_5.jpg'
import Baby from '../assets/category-baby-care_6.jpg'
import Header1 from "../Components/Header1";
import Header2 from "../Components/Header2";
import Details from "./Details";
import Footer from "../Components/Footer";


function Home2() {
  const navigate = useNavigate();
  
  return (
    <>
     
       <Header1/>
       <Header2/>
                    {/* Welcome to Daily  Fresh */}
                    <div className="w-[1296px] h-[500px] mx-auto mt-[50px]">
                        <div className="flex items-center justify-between bg-gray-200 p-4 rounded-[10px]">
                            <div className="flex gap-[20px] items-center">
                          <div className="w-[120px] h-[120px] bg-cover"
                          style={{ backgroundImage: `url(${About})` }}
                          />  
                          <div className=""> 
                          <h2 className="text-[30px] font-semibold">Welcome to DailyFresh</h2>  
                          <p>Download the app get free food <span className="text-green-600">& $30</span> off on your first order.</p>
                          </div>  
                          </div>  
                          <div className="w-[250px] h-[50px] border border-black p-2 justify-center flex rounded-[7px] text-white bg-[#001e2b]">
                            <a href="">
                                <button>Download DailyFresh App</button>
                            </a>
                            </div>           
                        </div>

                        <div className="mt-[50px]">

                            <div className="flex gap-[40px]">

                              <div className="relative">
                                <div className="w-[407px] h-[256px] bg-cover "
                                style={{backgroundImage: `url(${Adbanner})`}}
                                />
                                <div className="absolute top-[0px] mt-[30px] ml-[30px]">
                                  <div className="leading-7">
                                <h2 className="text-[25px] font-bold">10% cashback on</h2>
                                <h2 className="text-[25px] font-bold">personal care</h2>
                                </div>
                                <div className="mt-[15px]">
                                <p>Max cashback: $12</p>
                                <p>Code: <span className="font-bold"> CARE12</span></p>
                                </div> 
                                <div className="mt-[20px]">
                                <a href=""><button className="border border-black items-center flex justify-center w-[100px] h-[40px] rounded-[8px] bg-[#001e2b] text-white">Shop Now</button></a>
                                </div>                              
                                </div>
                                </div>

                                <div className="relative">
                                  <div className="w-[407px] h-[256px] bg-cover"
                                  style={{backgroundImage: `url(${Adbanner2})`}}
                                  />
                                  <div className="absolute top-[0px] mt-[30px] ml-[30px]">
                                    <div className="leading-7">
                                    <h2 className="text-[25px] font-bold">Say yes to</h2>
                                    <h2 className="text-[25px] font-bold">season’s fresh</h2>
                                    </div>
                                    <div className="mt-[15px]">
                                      <p className="text-[15px]">Refresh your day</p>
                                      <p className="text-[15px]">the fruity way</p>
                                    </div>
                                    <div className="mt-[20px]">
                                      <a href=""><button className="border border-black items-center flex justify-center w-[100px] h-[40px] rounded-[8px] bg-[#001e2b] text-white">Shop Now</button></a>
                                    </div>
                                  </div>
                                </div>


                                <div className="relative">
                                  <div className="w-[407px] h-[256px] bg-cover"
                                     style={{backgroundImage: `url(${Adbanner3})`}}
                                  />
                                   <div className="absolute top-[0px] mt-[30px] ml-[30px]">
                                    <div className="leading-7">
                                    <h2 className="text-[25px] font-bold">When in doubt,</h2>
                                    <h2 className="text-[25px] font-bold">eat ice cream</h2>
                                    </div>
                                    <div className="mt-[15px]">
                                      <p className="text-[15px]">Enjoy a scoop of</p>
                                      <p className="text-[15px]">summer today</p>
                                    </div>
                                    <div className="mt-[20px]">
                                      <a href=""><button className="border border-black items-center flex justify-center w-[100px] h-[40px] rounded-[8px] bg-[#001e2b] text-white">Shop Now</button></a>
                                    </div>
                                  </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    {/* shop category*/}

                    <div className='w-[1296px] h-[150px]   mx-auto mb-[250px]'>
                             <div className=''>
                                    <h2 className='text-[30px] mb-[30px]'>Shop by Category </h2>
                                </div>
                                
                            <div className='flex gap-5 justify-between'>
                               
                    
                                <div className='border border-black w-[200px] h-[220px] flex items-center justify-center rounded-[10px] hover:border-[#0aad0a] hover:shadow-2xl   '>
                                    <a href=''>
                                        <img src={Snack}></img>
                                        <p className='mt-[10px]'>Snack & Munchies</p>
                                    </a>
                                </div>
                    
                                <div className='border border-black w-[200px] h-[220px] flex items-center justify-center rounded-[10px] hover:border-[#0aad0a] hover:shadow-2xl  '>
                                    <a href=''>
                                        <img src={Bakery}></img>
                                        <p className='mt-[10px]'>Bakery & Biscuits</p>
                                    </a>
                                </div>
                    
                                <div className='border border-black w-[200px] h-[220px] flex items-center justify-center rounded-[10px] hover:border-[#0aad0a] hover:shadow-2xl '>
                                    <a href=''>
                                        <img src={Instant}></img>
                                        <p className='mt-[10px] ml-[11px]'>Instant Food</p>
                                    </a>
                                </div>
                    
                                <div className='border border-black w-[200px] h-[220px] flex items-center justify-center rounded-[10px] hover:border-[#0aad0a] hover:shadow-2xl  '>
                                    <a href=''>
                                        <img src={tea}></img>
                                        <p className='mt-[10px]'>Tea, Coffee & Drinks</p>
                                    </a>
                                </div>
                    
                                <div className='border border-black w-[200px] h-[220px] flex items-center justify-center rounded-[10px] hover:border-[#0aad0a] hover:shadow-2xl  '>
                                    <a href=''>
                                        <img src={Ata}></img>
                                        <p className='mt-[10px]'>Atta, Rice & Dal</p>
                                    </a>
                                </div>
                    
                                 <div className='border border-black w-[200px] h-[220px] flex items-center justify-center rounded-[10px] hover:border-[#0aad0a] hover:shadow-2xl '>
                                    <a href=''>
                                        <img src={Baby}></img>
                                        <p  className='mt-[10px] ml-[13px]'
                                        >Baby care</p>
                                    </a>
                                </div>
                    
                            </div>
                        </div>
                        <Details/>
                        <Footer/>
    </>
  );
}

export default Home2;

 
              
