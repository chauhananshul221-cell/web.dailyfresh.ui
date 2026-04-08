import React from 'react'
import Store from "..//assets/store-graphics.svg"
import { Link } from "react-router-dom";
import Stores1 from "..//assets/stores-logo-1.svg"
import Stores2 from "..//assets/stores-logo-2.svg"
import Stores3 from  "..//assets/stores-logo-3.svg"
import Stores4 from "..//assets/stores-logo-4.svg"
import Stores5 from "..//assets/stores-logo-5.svg"
import Stores6 from "..//assets/stores-logo-6.svg"
import Stores7 from "..//assets/stores-logo-7.svg"
import Stores8 from "..//assets/stores-logo-8.svg"
import Stores9 from "..//assets/stores-logo-9.svg"
import Stores10 from "..//assets/stores-logo-2 (1).svg"
import Stores11 from "..//assets/stores-logo-3 (1).svg"
import Stores12 from "..//assets/stores-logo-4 (1).svg"
import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';


function Stores() {

 const stores = [
  {
    id: 1,
    name: "E-Grocery Super Market",
    categories: ["Organic", "Groceries", "Butcher Shop"],
    deliveryTime: null,
    pickup: "Pickup available",
    distance: "7.5 mi away",
    image: Stores1
  },
  {
    id: 2,
    name: "DealShare Mart",
    categories: ["Alcohol", "Groceries"],
    deliveryTime: null,
    pickup: "Pickup available",
    distance: "7.2 mi away",
    image: Stores2
  },
  {
    id: 3,
    name: "DMart",
    categories: ["Groceries", "Bakery", "Deli"],
    deliveryTime: "Delivery by 10:30pm",
    pickup: "Pickup available",
    distance: "9.3 mi away",
    image: Stores3
  },
  {
    id: 4,
    name: "Blinkit Store",
    categories: ["Meal Kits", "Prepared Meals", "Organic"],
    deliveryTime: null,
    pickup: "Pickup available",
    distance: "40.5 mi away",
    image: Stores4
  },
  {
    id: 5,
    name: "StoreFront Super Market",
    categories: ["Groceries", "Bakery"],
    deliveryTime: "Delivery by 11:30pm",
    pickup: "Pickup available",
    distance: "28.1 mi away",
    image: Stores5
  },
  {
    id: 6,
    name: "BigBasket",
    categories: ["Groceries", "Deli"],
    deliveryTime: "Delivery by 10:30pm",
    pickup: "Pickup available",
    distance: "7.5 mi away",
    image: Stores6
  },
  {
    id: 7,
    name: "Swiggy Instamart",
    categories: ["Meal Kits", "Prepared Meals", "Organic"],
    deliveryTime: null,
    pickup: "Pickup available",
    distance: "40.5 mi away",
    image: Stores7
  },
  {
    id: 8,
    name: "Online Grocery Mart",
    categories: ["Groceries", "Bakery"],
    deliveryTime: "Delivery by 11:30pm",
    pickup: "Pickup available",
    distance: "28.1 mi away",
    image: Stores8
  },
  {
    id: 9,
    name: "Spencers",
    categories: ["Groceries", "Deli"],
    deliveryTime: "Delivery by 10:30pm",
    pickup: "Pickup available",
    distance: "7.5 mi away",
    image: Stores9
  },
  {
    id: 10,
    name: "DealShare Mart",
    categories: ["Alcohol", "Groceries"],
    deliveryTime: null,
    pickup: "Pickup available",
    distance: "7.2 mi away",
    image: Stores10
  },
  {
    id: 11,
    name: "DMart",
    categories: ["Groceries", "Bakery", "Deli"],
    deliveryTime: "Delivery by 10:30pm",
    pickup: "Pickup available",
    distance: "9.3 mi away",
    image: Stores11
  },
  {
    id: 12,
    name: "Blinkit Store",
    categories: ["Meal Kits", "Prepared Meals", "Organic"],
    deliveryTime: null,
    pickup: "Pickup available",
    distance: "40.5 mi away",
    image: Stores12
  }
];

  return (
    <>
    <Header1/>
    <Header2/>
    <div className='w-[1296px] mx-auto mt-[20px] mb-[40px]'>
      <div className='flex gap-[20px]'>
        <h2>Home</h2>
        <h2>Stores</h2>
        <h2>Store Grid</h2>
      </div>
      <div className='w-[1288px] h-[208px] flex justify-between bg-gray-200 items-center  rounded-[10px] mt-[20px] '>
        <p className='text-[35px] font-semibold ml-[50px]'>Stores</p>
        <Link>
        <img src={Store} alt={Store}></img>
        </Link>
      </div>
    </div>

<div className=" w-[1296px] grid grid-cols-4 gap-5 mx-auto">
  {stores.map((item) => (
    <div key={item.id} className="border p-4 rounded-lg hover:border-green-500 hover:bg-white">
      
      <img src={item.image} alt={item.name} className="w-12 h-12"/>

      <h3 className="font-semibold mt-2">{item.name}</h3>

      <p className="text-sm text-gray-500">
        {item.categories.join("  ")}
      </p>

      {item.deliveryTime && (
        <p className="text-green-600 text-sm">
          {item.deliveryTime}
        </p>
      )}

      <p className="text-sm">{item.pickup}</p>

      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
        {item.distance}
      </span>

    </div>
  ))}
</div>

<Footer/>

    </>
  )
}

export default Stores
