import React from "react";
import { Link } from "react-router-dom";
import Blogs1 from "..//assets/blog-large.jpg";
import Blog1 from "..//assets/blog-img-1.jpg";
import Blog2 from "..//assets/blog-img-2.jpg";
import Blog3 from "..//assets/blog-img-3.jpg";
import Blog4 from "..//assets/blog-img-4.jpg";
import Blog5 from "..//assets/blog-img-5.jpg";
import Blog6 from "..//assets/blog-img-6.jpg";
import Blog7 from "..//assets/blog-img-7.jpg";
import Blog8 from "..//assets/blog-img-8.jpg";
import Blog9 from "..//assets/blog-img-9.jpg";
import Footer from "../Components/Footer";
import Header1 from "../Components/Header1";
import Header2 from "../Components/Header2";

function Blogcart() {
  const Cart = [
    {
      id: 1,
      category: "Recipes",
      title: "Harissa Chickpeas with Whipped Feta",
      description:
        "In et eros dapibus, facilisis ipsum sit amet, tempor dolor. Donec sed nisi gravida, molestie dolor molestie, congue sapien",
      date: "10 April 2026",
      readTime: "Read time: 12min",
      Image: Blog1,
    },

    {
      id: 2,
      category: "Recipes",
      title: "Almond Butter Chocolate Chip Zucchini Bars",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.",
      date: "12 April 2026",
      readTime: "Read time: 8min",
      Image: Blog2,
    },

    {
      id: 3,
      category: "Company",
      title: "Spicy Shrimp Tacos Garlic Cilantro Lime Slaw",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.",
      date: "14 April 2026",
      readTime: "Read time: 5min",
      Image: Blog3,
    },

    {
      id: 4,
      category: "Recipes",
      title: "Red Chile Chicken Tacos with Creamy Corn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.",
      date: "16 April 2026",
      readTime: "Read time: 9min",
      Image: Blog4,
    },

    {
      id: 5,
      category: "Retailer",
      title: "Basic + Awesome Broccoli Cheese Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.",
      date: "18 April 2026",
      readTime: "Read time: 12min",
      Image: Blog5,
    },

    {
      id: 6,
      category: "Recipes",
      title:
        "No-Boil Baked Penne with Meatballs",
      description:
        "Nulla consectetur sapien a libero imperdiet posuere. Donec sollicitudin, turpis sit amet sollicitudin tristique, metus eros euismod tortor",
      date: "13 April 2026",
      readTime: "Read time: 6min",
      Image: Blog6,
    },

    {
      id: 7,
      category: "Recipes",
      title: "Red Chile Chicken Tacos with Creamy Corn",
      description:
        "Nulla consectetur sapien a libero imperdiet posuere. Donec sollicitudin, turpis sit amet sollicitudin tristique, metus eros euismod tortor",
      date: "17 April 2026",
      readTime: "Read time: 6min",
      Image: Blog7,
    },

    {
      id: 8,
      category: "Retailer",
      title: "Basic + Awesome Broccoli Cheese Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.",
      date: "14 April 2026",
      readTime: "Read time: 12min",
      Image: Blog8,
    },

    {
      id: 9,
      category: "Recipes",
      title: "No-Boil Baked Penne with Meatballs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.",
      date: "4 April 2026",
      readTime: "Read time: 6min",
      Image: Blog9,
    },
  ];

  return (
    <>
    <Header1/>
    <Header2/>
      <div className="w-[1296px] mx-auto mt-[30px]">
        <div className="flex gap-[30px]">
          <h2 className="text-[#0aad0a]">Home</h2>
          <h2 className="text-[#0aad0a]">Blog</h2>
          <h2>Daily Fresh</h2>
        </div>
        <h2 className="text-[35px] font-semibold mt-[30px]">FreshCart Blog</h2>
        <div className="flex items-center justify-between">
          <div className="mb-[30px]">
            <Link>
              <img src={Blogs1} className="w-[847px] h-[406] mt-[30px] rounded-2xl"></img>
            </Link>
          </div>
          <div className="">
            <h2 className="text-[28px] font-bold">
              Garlic Cream Bucatini with{" "}
            </h2>
            <h2 className="text-[28px] font-bold">Peas and Asparagus</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Nunc ac erat ut neque bibendum egestas sed quis justo.</p>
            <p>Integer non rhoncus diam. Nullam eget dapibus lectus,</p>
            <p>vitae condimentum sem.</p>
          </div>
        </div>
      </div>

      <div className="w-[1296px] mx-auto mt-[30px]">
        <div className="grid grid-cols-3 gap-[20px] ">
          {Cart.map((items) => (
            <div key={items.id}>
              <div className="">
                <img
                  src={items.Image}
                  alt="{items.title}"
                  className="w-[407px] h-[200px] rounded-2xl"
                ></img>
              </div>
              
              <div className="mt-[15px] leading-9">
                <p className="text-[#0aad0a]">{items. category}</p>
                <h2 className="hover:text-[#0aad0a] text-[18px] font-bold">{items.title}</h2>
              </div>
              <div className="">
                <p className="text-gray-600">{items.description}</p>
              </div>
              <div className="flex justify-between mt-[20px] mb-[20px] ">
                <span>{items.date}</span>
                <span>{items.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blogcart;
