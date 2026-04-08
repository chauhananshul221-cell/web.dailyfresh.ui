import React from "react";
import Daily from "../assets/Daily Fresh.jpg";
import Signins from "../assets/signin-g1.svg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      {/* Top Logo */}
      <div className=" w-385 h-[52px] bg-[#fff] items-center flex px-8 py-4 border-b mt-10px">
        <div className=" w-[1320px] flex justify-between  ">
          <img src={Daily} className="ml-[100px] w-[130px] h-[41px]"></img>
          <p>Already have an account? Sign in</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-[1320px] h-[394px] mx-auto p-4  flex justify-evenly mt-[100px]">
        <div className="flex">
          {/* Left Image */}
          <div className="w-[394px] h-[394px] mr-[170px]">
            <img src={Signins}></img>
          </div>

          {/* Right Form */}
          <div className="">
            <div className="mb-[40px]">
            <h2 className="text-[28px] font-bold">Sign in to DailyFresh</h2>
            <p className="tetx-[14px] text-[#5C6C75]">Welcome back to DailyFresh! Enter your email to get started.</p>
            </div>
            <div className="">
              <form>
                <div className="flex flex-col gap-4 ">
                <input type="Email" name="Email name" placeholder="Email" className=" w-[407px] h-[41px] border border-gray-400 p-2 rounded-[7px]"/>
                <input type="pasword" name="pasword" placeholder="***" className=" w-[407px] h-[41px] border border-gray-400 p-2 rounded-[7px]"/>
                </div>
                <div className="flex gap-[70px] mt-[15px] text-gray-400">
                  <div className="flex gap-[10px]">
                    <input type="checkbox" />
                    <p className="">Remember me</p>
                  </div>
                  <div className="">
                    <p>
                      Forgot password?{" "}
                      <span className="text-green-600">Reset It</span>{" "}
                    </p>
                  </div>
                </div>
                <button className=" w-[407px] h-[41px] rounded-[7px] border border-black bg-green-600 text-white cursor-pointer mt-[10px] border-none">Sign in </button>
                <p className="mt-[10px] text-gray-400">
                  Don’t have an account? 
                  <Link to="/acctsignup">
                  <span className="text-green-600">Sign Up</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Signin;
















































// import React from "react";
// import Fresh from "../assets/freshcart-logo.svg";
// import SigninImg from "../assets/signin-g1.svg";

// function Signin() {
//   return (
//     <>
//       {/* Top Logo */}
//       <div className="p-6">
//         <img src={Fresh} alt="logo" className="w-36" />
//       </div>

//       {/* Main Section */}
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="flex bg-white shadow-lg rounded-xl overflow-hidden w-[900px]">

//           {/* Left Image */}
//           <div className="w-1/2 bg-gray-100 flex items-center justify-center p-6">
//             <img src={SigninImg} alt="signin" className="w-full" />
//           </div>

//           {/* Right Form */}
//           <div className="w-1/2 p-8">
//             <h2 className="text-2xl font-bold mb-2">
//               Sign in to FreshCart
//             </h2>

//             <p className="text-gray-500 mb-6">
//               Welcome back to FreshCart! Enter your email to get started.
//             </p>

//             <div className="flex flex-col gap-4">
//               <div>
//                 <label className="block mb-1 text-sm">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full border rounded-lg px-4 py-2 outline-none focus:border-green-500"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm">Password</label>
//                 <input
//                   type="password"
//                   placeholder="*****"
//                   className="w-full border rounded-lg px-4 py-2 outline-none focus:border-green-500"
//                 />
//               </div>

//               <button className="bg-green-600 text-white py-3 rounded-lg mt-2 hover:bg-green-700">
//                 Sign In
//               </button>

//               <p className="text-sm text-gray-500">
//                 Already have an account?{" "}
//                 <span className="text-green-600 cursor-pointer">
//                   Sign up
//                 </span>
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signin;
