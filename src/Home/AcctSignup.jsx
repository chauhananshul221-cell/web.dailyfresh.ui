import React from "react";
import Daily from "../assets/Daily-Fresh.jpg";
import Signin from "../assets/signup-g-img.svg";
import Footer from "../Components/Footer";

function AcctSignup() {
  return (
    <>
      {/* Top Logo */}
      <div className="w-full h-[70px] bg-[#fff] flex items-center border-b">
        <div className="max-w-[1320px] w-full mx-auto flex justify-between items-center px-8">
          <img src={Daily} className="w-[130px] h-[34px]" />
          <p>Already have an account? Sign in</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-[1200px] mx-auto flex items-center mt-40">
        
        {/* Left side */}
        <div className="w-1/2">
          <img src={Signin} className="w-[394px] h-[394px]" />
        </div>

        {/* Right side */}
        <div className="w-1/2 pl-10">
          <h2 className="text-3xl font-bold">Get Start Shopping</h2>
          <p className="text-gray-500 mt-2">
            Welcome to Daily Fresh! Enter your email to get started.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border rounded-lg p-3"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="password"
              placeholder="*****"
              className="w-full border rounded-lg p-3"
            />

            <button className="w-full bg-green-600 text-white py-3 rounded-lg">
              Register
            </button>
          </div>
        </div>

      </div>
       <Footer/>
    </>
  
  );
}

export default AcctSignup;