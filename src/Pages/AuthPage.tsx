import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8 border border-red-600/30">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          {isLogin ? "WELCOME BACK" : "CREATE ACCOUNT"}
        </h1>

        <p className="text-center text-white/60 mb-6">
          {isLogin
            ? "Sign in to continue your coffee journey"
            : "Join the Society of Strong Coffee"}
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Name (Signup only) */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-red-600 outline-none"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-red-600 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-red-600 outline-none"
          />

          {/* Confirm Password (Signup only) */}
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-red-600 outline-none"
            />
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-semibold mt-2"
          >
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>
        </form>

        {/* Switch */}
        <p className="text-center text-white/60 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-red-500 ml-2 hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
};

export default AuthPage;