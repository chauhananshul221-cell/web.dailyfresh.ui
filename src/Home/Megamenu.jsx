import React from "react";
// import Menu from "..//assets/menu-banner1.jpg"


function Megamenu() {
  return (
    <>
      <div className="z-50 w-[1296px] h-[400px] border border-white mx-auto rounded-[10px] hover:border-[#fff] hover:shadow-2xl">
        <div className="flex gap-[50px]  justify-between leading-7 p-4">

             {/* Column 1 */}
          <div className="">
            <h2>Dairy, Bread & Eggs</h2>
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
              <h2>Breakfast & Instant Food</h2>
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
              <h2>Cold Drinks & Juices</h2>
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
                className="bg-cover  h-[300px] w-[250px] mb-[100px]"
                style={{ backgroundImage: `url(${Menu})` }}
              ></div>
            
        </div>
      </div>
    </>
  );
}

export default Megamenu;
