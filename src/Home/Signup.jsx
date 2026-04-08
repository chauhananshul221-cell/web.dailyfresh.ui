import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white w-[420px] p-8 rounded-lg shadow-lg">
        <div className="flex justify-between">

          
             <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          
     
        <h3 className="text-[20px]">X</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-md mt-1"
            />
          </div>

          <div>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-md mt-1"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded-md mt-1"
            />
          </div>

          <p className="text-sm text-gray-500">
            By Signup, you agree to our
            <span className="text-green-600"> Terms of Service </span>
            & <span className="text-green-600">Privacy Policy</span>
          </p>

          <button className="bg-green-600 text-white w-full py-3 rounded-md">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?
          <Link to="/signin">
          <span className="text-green-600 cursor-pointer"> Sign in</span>
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;