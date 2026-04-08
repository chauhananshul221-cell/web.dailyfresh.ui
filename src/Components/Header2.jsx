import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiSquaresFourBold } from "react-icons/pi";
import Menu from "..//assets/menu-banner1.jpg"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";



function Header2() {

  return (
    <>
      <div className="w-[1290px] h-[41px] mx-auto pb-4 ">
        <div className="flex gap-[40px] ">
          <div className="border b41pxorder-black w-[182px] h-[41px]  items-center justify-center flex rounded-[10px] bg-[#0aad0a] gap-[8px] border-0">
            <PiSquaresFourBold className="text-[25px] text-white" />
            <div className="relative group">
              <h2 className="text-white ">All Department </h2>
              <div className="absolute hidden  bg-[#f9f9f9]  group-hover:block z-[99] rounded-[5px] p-4 mt-[10px] leading-7">
                <ul className="w-[200px] h-[200px]  ">
                  <li>Dairy, Bread & Eggs</li>
                  <li>Snacks & Munchies</li>
                  <li>Fruits & Vegetables</li>
                  <li>Cold Drinks & Juices</li>
                  <li>Breakfast & Instant Food</li>
                  <li>Bakery & Biscuits</li>
                  <li>Chicken, Meat & Fish</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[648px] h-[] mt-[10px]">
            <ul className="flex justify-between ">
              <div className="relative group">
                <li className="flex items-center justify-center gap-[4px] hover:text-[#09de09] ">
                  Home <IoIosArrowDown />
                </li>
                <div className=" absolute hidden  bg-[#f9f9f9]  group-hover:block z-[99] rounded-[7px] p-2 leading-7">
                  <ul className="w-[150px] h-[150px] ml-[10px] ">
                    <Link to="/home1">
                    <li>Home1</li>
                    </Link>
                    <Link to="/home2">
                      <li>Home2</li>
                    </Link>
                  
                    <li>Home3</li>
                   
                    <li>Home4</li>
                    <li>Home5</li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
              <li className="flex items-center justify-center gap-[4px]  hover:text-[#09de09]">
                Shop <IoIosArrowDown />
              </li>
              <div className="absolute hidden bg-[#f9f9f9]  group-hover:block  z-[99] rounded-[7px] p-2 leading-7">
                <ul className="w-[170px] h-[300px] ml-[10px] cursor-pointer">
                  <Link to="/shopGrid">
                  <li>Shop Grid - Filter</li>
                  </Link>
                 <li>Shop Grid - 3 column</li>
                 <li>Shop List - Filter</li>
                 <li>Shop - Filter</li>
                 <li>Shop Wide</li>
                 <li>Shop Single</li>
                 <li>Shop Single v2</li>
                 <li>Shop Wishlist</li>
                 <li>Shop Cart</li>
                 <li>Shop Checkout</li>
                </ul>
              </div>
              </div>
              <div className=" relative group">
              <li className="flex items-center justify-center gap-[4px]  hover:text-[#09de09]">
                Stores <IoIosArrowDown />
              </li>
              <div className="absolute hidden group-hover:block bg-[#f9f9f9] p-2 leading-7 rounded-[7px] z-[99]">
                <ul className="w-[130px] h-[110px] ml-[10px]">
                  <Link to="/stores">
                   <li>Store List</li>
                  </Link>
                
                 <li>Store Grid</li>
                 <li>Store Single</li>
                </ul>
              </div>
              </div>
              <div className="relative group">
                <li className="flex items-center justify-center gap-[4px] hover:text-[#09de09]">
                  Mega menu <IoIosArrowDown />
                </li>
                <div className=" absolute hidden left-[55%] -translate-x-[38%] mt-[10px] group-hover:block z-[99] bg-[#fff]   ">
                  {/* <Megamenu /> */}
                  <div className=" w-[1300px] h-[400px] border border-white mx-auto  rounded-[10px] hover:border-[#fff] hover:shadow-2xl">
                          <div className="flex gap-[50px]  justify-between leading-7 p-4">
                  
                               {/* Column 1 */}
                            <div className="">
                              <h2 className="text-[#0aad0a] font-semibold">Dairy, Bread & Eggs</h2>
                              <div className="">
                                <ul>
                                  <li>Butters</li>
                                  <li>Milk Drinks</li>
                                  <li>Curd $ Yogurt</li>
                                  <li>Eggs</li>
                                  <li>Buns & Bakery</li>
                                  <li>Cheese</li>
                                  <li>Condensed Milk</li>
                                  <li>Dairy Product</li>
                                </ul>
                              </div>
                            </div>
                  
                                {/* Column 2 */}
                              <div className="">
                                <h2 className="text-[#0aad0a] font-semibold">Breakfast & Instant Food</h2>
                                <div className="">
                                  <ul>
                                    <li>Breakfast Cereal</li>
                                    <li>Noodles, Pasta & Soup</li>
                                    <li>Frozen Veg Snacks</li>
                                    <li>Frozen Non-Veg Snacks</li>
                                    <li>Vermicelli</li>
                                    <li>Instant Mixes</li>
                                    <li>Batter</li>
                                    <li>Fruit and Juices</li>
                                  </ul>
                                </div>
                              </div>
                               
                                {/* Column 3 */}
                              <div className="">
                                <h2 className="text-[#0aad0a] font-semibold">Cold Drinks & Juices</h2>
                                <div className="">
                                  <ul>
                                    <li>Soft Drinks</li>
                                    <li>Fruits Juices</li>
                                    <li>Coldpress</li>
                                    <li>Water & Ice Cubes</li>
                                    <li>Soda & Mixers</li>
                                    <li>Health Drinks</li>
                                    <li>Herbal Drinks</li>
                                    <li>Milk Drinks</li>
                                  </ul>
                                </div>
                              </div>
                  
                                
                                 {/* Column 4 */}
                                 <div
                                  className="bg-cover  h-[350px] w-[300px] mb-[100px]"
                                  style={{ backgroundImage: `url(${Menu})` }}
                                >
                                  <div className="mt-[25px] ml-[30px]  ">
                                    <div className="leading-5 font-semibold">
                                  <p>Dont miss this </p>
                                  <p>offer today.</p>
                                  </div>
                                  <button className="border border-black w-[80px] h-[30px] bg-green-500 rounded-[6px] mt-[9px] text-white border-none ">Shop now </button>
                                  </div>
                                  </div> 
                              
                          </div>
                        </div>
                </div>
                </div>
                <div className="relative group">
              <li className="flex items-center justify-center gap-[4px] hover:text-[#09de09]">
                Pages <IoIosArrowDown />
              </li>
              <div className="absolute hidden group-hover:block bg-[#f9f9f9] p-2 leading-7  rounded-[7px] z-[99]">
                <ul className="w-[150px] h-[180px] ml-[10px]">
                  <Link to="/blogcart">
                  <li>Blog</li>
                  </Link>
                  <li>Blog Single</li>
                  <li>Blog Categories</li>

                  <Link to="/Aboutpages">
                  <li>About us</li>
                  </Link>
                  
                  <li>404 Error</li>
                  <li>Contact</li>
                </ul>
              </div>
              </div>
              <div className="relative group">
              <li className="flex items-center justify-center gap-[4px] hover:text-[#09de09]">
                Account <IoIosArrowDown />
              </li>
              <div className="absolute hidden group-hover:block bg-[#f9f9f9] p-2 leading-7  rounded-[7px] z-[99]">
                <ul className="w-[150px] h-[130px] ml-[10px]">
                  <Link to="/signin">
                  <li>Sign in</li>
                   </Link>
                   <Link to="/acctSignup">
                  <li>Signup</li>
                  </Link>
                  <li>Forgot password</li>
                  <div className="relative group/my">
                  <div className="flex gap-[20px] items-center ">
                  <li>My Account </li>
                  <IoIosArrowForward />
                  </div>
                  <div className=" absolute hidden group-hover/my:block bg-[#f9f9f9] p-2 leading-7 rounded-[7px] z-[99] ml-[140px]">
                    <ul className="w-[150px] h-[150px] ml-[10px]">
                      <li>Orders</li>
                      <li>Sittings</li>
                      <li>Address</li>
                      <li>Payment Method</li>
                      <li>Notification</li>
                    </ul>
                  </div>
                  </div>
                </ul>
              </div>
              </div>
              <li className="flex items-center justify-center gap-[4px] hover:text-[#09de09]">
                Dashboard <IoIosArrowDown />
              </li>
              <li className="flex items-center justify-center gap-[4px] hover:text-[#09de09]">
                Docs <IoIosArrowDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b border-black mt-[20px]  border-gray-200"></div>
    </>
  );
}

export default Header2;
