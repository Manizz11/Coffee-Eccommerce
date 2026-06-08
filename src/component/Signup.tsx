import React, { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  password: string;
};

type SignupProps = {
  onSignup: (data: FormData) => void;
  onSwitch: () => void;
};

const Signup: React.FC<SignupProps> = ({ onSignup, onSwitch }) => {

    const[formData,setFormData]= useState({
        fullName:"",
        email:"",
        password:""
    })


    const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
        if( formData.fullName && formData.email && formData.password){
            onSignup(formData)
        }
       
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 mt-14">
      <div className="max-w-6xl w-full bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-red-600">
        <div className="grid md:grid-cols-2">
          
          {/* Left Side */}
          <div className="bg-gradient-to-br from-red-700 to-black text-white flex flex-col justify-center items-center p-10">
            <h1 className="text-5xl font-bold mb-4">
              Join Us
            </h1>

            <p className="text-center text-gray-200 max-w-sm mb-8">
              Create your account and unlock a world of possibilities.
            </p>

            <div className="w-40 h-40 rounded-full bg-red-600/20 border-4 border-red-500 flex items-center justify-center">
              <span className="text-6xl font-bold text-red-500">🚀</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10 text-white">
            <h2 className="text-4xl font-bold mb-2">
              Sign Up
            </h2>

            <p className="text-gray-400 mb-8">
              Create your account to get started.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  name="fullName"
                  onChange={handleChnage}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-black border border-red-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                    name="email"
                    onChange={handleChnage}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-red-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  name="password"
                  onChange={handleChnage}
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-black border border-red-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                />
              </div>

            

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 py-3 rounded-lg font-semibold text-white shadow-lg shadow-red-600/30"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-gray-400 mt-6">
              Already have an account?{" "}
              <span onClick={onSwitch} className="text-red-500 hover:text-red-400 cursor-pointer font-semibold">
                Login
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;