import React from 'react'
import Amazon from "../assets/amazonpay.svg";
import American from "../assets/american-express.svg";
import Mastercard from "../assets/mastercard.svg";
import Paypal from "../assets/paypal.svg";
import Visa from "../assets/visa.svg";
import Appstore from "../assets/appstore-btn.svg";
import Googleplay from "../assets/googleplay-btn.svg";


function Footer() {
  return (
    <>
    <div className='w-[1520px] h-[500px] bg-[#F0F3F2] border border-white mt-[30px] mb-[50px]'>
        <div className='max-w-[1296px]  mx-auto p-4 mt-[60px] '>
        <div className='flex justify-between'>
            <div className='flex gap-[40px] '>
                <div className=''>
                    <h2 className='font-semibold mb-[8px]'>Categories</h2>
                    <div className='leading-7'>
                        <ul className='[&>li]:hover:text-[#0aad0a] [&>li]:cursor-pointer'>
                            <li>Vegetables & Fruits</li>
                            <li> Breakfast & instant food</li>
                            <li> Bakery & Biscuits</li>
                            <li>Atta, rice & dal</li>
                            <li>Sauces & spreads</li>
                            <li>Organic & gourmet</li>
                            <li> Baby care</li>
                            <li>Cleaning essentials</li>
                            <li>Personal care</li>
                        </ul>
                    </div>
                </div>
                <div className='leading-7 mt-[30px]'>
                    <ul className='[&>li]:hover:text-[#0aad0a] [&>li]:cursor-pointer'>
                        <li>Dairy, bread & eggs</li>
                        <li> Cold drinks & juices</li>
                        <li> Tea, coffee & drinks</li>
                        <li>Masala, oil & more</li>
                        <li>Chicken, meat & fish</li>
                        <li>Paan corner</li>
                        <li> Pharma & wellness</li>
                        <li>Home & office</li>
                        <li>Pet care</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-evenly w-[900px]'>
                <div className=''>
                    <h2 className='font-semibold mb-[8px]'>Get to know us</h2>
                    <div className='leading-7'>
                        <ul className='[&>li]:hover:text-[#0aad0a] [&>li]:cursor-pointer'>
                            <li>Company</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Our Value</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-semibold mb-[8px]'>For Consumers</h2>
                    <div className='leading-7 '>
                        <ul className='[&>li]:hover:text-[#0aad0a] [&>li]:cursor-pointer'>
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Product Returns</li>
                            <li>FAQ</li>
                            <li>Shop Checkout</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-semibold mb-[8px]'>Become a Shopper</h2>
                    <div className='leading-7'>
                        <ul className='[&>li]:hover:text-[#0aad0a] [&>li]:cursor-pointer'>
                            <li>Shopper Opportunities</li>
                            <li>Become a Shopper</li>
                            <li>Earnings</li>
                            <li>Ideas & Guides</li>
                            <li>New Retailers</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-semibold mb-[8px]'>Freshcart programs</h2>
                    <div className='leading-7'>
                        <ul className='[&>li]:hover:text-[#0aad0a] [&>li]:cursor-pointer'>
                            <li>Freshcart programs</li>
                            <li>Gift Cards</li>
                            <li>Promos & Coupons</li>
                            <li>Freshcart Ads</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    <div className='border-b border-black border-gray-400 bg-green-700 mt-[30px]'>
    </div>
    <div className=''>
        <div className='flex justify-between mt-[30px]'>
           
        <div className=''>
            <div className='flex gap-[10px]'>
                <h2>Payment Partners</h2>
                <div className='flex gap-[10px]'>
                    <img src={Amazon}></img>
                    <img src={American}></img>
                    <img src={Mastercard}></img>
                    <img src={Paypal}></img>
                    <img src={Visa}></img>
 
                </div>
            </div>
           
        </div>
          <div className='flex gap-[20px] items-center'>
                <h2 className='font-semibold'>Get deliveries with FreshCart</h2>
                    <img src={Appstore} className='w-[150px]'></img>
                    <img src={Googleplay} className='w-[150px]'></img>
            </div>
        </div>
         <div className='border-b border-black bg-green-700 mt-[30px] border-gray-400 font-medium'></div>
    </div>

        </div>
        
    </div>
    </>
  )
}

export default Footer
