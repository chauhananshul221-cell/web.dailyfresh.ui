import React from "react";
import Product1 from "..//assets/product-img-1.jpg";
import Product2 from "..//assets/product-img-2.jpg";
import Product3 from "..//assets/product-img-3.jpg";
import Product4 from "..//assets/product-img-4.jpg";
import Product5 from "..//assets/product-img-5.jpg";
import Product6 from "..//assets/product-img-6.jpg";
import Product7 from "..//assets/product-img-7.jpg";
import Product8 from "..//assets/product-img-8.jpg";
import Product9 from "..//assets/product-img-9.jpg";
import Product10 from "..//assets/product-img-10.jpg";
import StarRating from "../assets/StarRating";
import { Link } from "react-router-dom";

function Popular({ cart = [], setCart = () => {} }) {

  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id);

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const decreaseQty = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id);

      if (!exist) return prev;

      if (exist.quantity === 1) {
        return prev.filter(item => item.id !== product.id);
      }

      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const Products = [
    { id: 1, category: "Snack & Munchies", name: "Haldiram's Sev Bhujia", Price: 18, oldPrice: 24, rating: 4.5, reviews: 149, Image: Product1 },
    { id: 2, category: "Bakery & Biscuits", name: "NutriChoice Digestive", Price: 24, oldPrice: null, rating: 4.5, reviews: 25, Image: Product2 },
    { id: 3, category: "Bakery & Biscuits", name: "Cadbury 5 Star Chocolate", Price: 32, oldPrice: 35, rating: 5, reviews: 469, Image: Product3 },
    { id: 4, category: "Snack & Munchies", name: "Onion Flavour Potato", Price: 3, oldPrice: 5, rating: 3.5, reviews: 456, Image: Product4 },
    { id: 5, category: "Instant Food", name: "Salted Instant Popcorn", Price: 13, oldPrice: 18, rating: 4.5, reviews: 39, Image: Product5 },
    { id: 6, category: "Dairy, Bread & Eggs", name: "Blueberry Greek Yogurt", Price: 18, oldPrice: 24, rating: 4.5, reviews: 189, Image: Product6 },
    { id: 7, category: "Dairy, Bread & Eggs", name: "Britannia Cheese Slices", Price: 24, oldPrice: null, rating: 5, reviews: 345, Image: Product7 },
    { id: 8, category: "Instant Food", name: "Kellogg's Original Cereals", Price: 32, oldPrice: 35, rating: 4, reviews: 90, Image: Product8 },
    { id: 9, category: "Snack & Munchies", name: "Slurrp Millet Chocolate", Price: 3, oldPrice: 5, rating: 4.5, reviews: 7, Image: Product9 },
    { id: 10, category: "Dairy, Bread & Eggs", name: "Amul Butter - 500 g", Price: 13, oldPrice: 18, rating: 3.5, reviews: 89, Image: Product10 },
  ];

  return (
    <>
      <div className="w-[1296px] mx-auto">
        <h2 className="mt-[70px] font-semibold text-[30px]">
          Popular Products
        </h2>

        {/* <Link to="/cart">
          <button className="bg-black text-white px-4 py-2 mt-2 rounded">
            Go To Cart
          </button>
        </Link> */}

        {/* <p className="mt-2 font-medium">
          🛒 Cart Items: {cart?.reduce((acc, item) => acc + item.quantity, 0) || 0}
        </p> */}

        <div className="grid grid-cols-5 gap-[30px] mt-[20px]">
          {Products.map((items) => {

            const productQty =
              cart?.find(p => p.id === items.id)?.quantity || 0;

            return (
              <div key={items.id}>
                <div className="w-[240px] border border-[#5C6C75] rounded-[10px] hover:border-[#0aad0a] hover:shadow-2xl">

                  <div className="w-[262px] h-[200px]">
                    <img src={items.Image} className="ml-[10px]" />
                  </div>

                  <div className="ml-4 mb-[30px] p-2">
                    <p>{items.category}</p>
                    <h2 className="font-bold">{items.name}</h2>

                    <div className="flex gap-[10px] mt-[10px]">
                      <StarRating rating={items.rating} />
                      <p>
                        {items.rating} ({items.reviews})
                      </p>
                    </div>

                    <div className="flex justify-between mt-[20px]">
                      <div className="flex gap-[5px]">
                        <span>${items.Price}</span>
                        {items.oldPrice && (
                          <span className="line-through text-gray-400">
                            ${items.oldPrice}
                          </span>
                        )}
                      </div>

                      {productQty === 0 ? (
                        <button
                          onClick={() => addToCart(items)}
                          className="bg-green-500 px-3 py-1 text-white rounded-md"
                        >
                          + Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decreaseQty(items)}
                            className="bg-green-500 px-2 text-white rounded"
                          >
                            -
                          </button>

                          <span>{productQty}</span>

                          <button
                            onClick={() => addToCart(items)}
                            className="bg-green-500 px-2 text-white rounded"
                          >
                            +
                          </button>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Popular;