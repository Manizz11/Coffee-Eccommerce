import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl p-8 border border-red-600/30">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-widest text-red-500">
            {isLogin ? "WELCOME BACK" : "JOIN US"}
          </h1>
          <p className="text-white/60 text-sm mt-2">
            {isLogin
              ? "Sign in to continue your coffee journey"
              : "Create an account and explore premium coffee"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-black/60 border border-gray-700 focus:border-red-500 outline-none transition"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-gray-700 focus:border-red-500 outline-none transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-gray-700 focus:border-red-500 outline-none transition"
          />

          {/* Confirm Password */}
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-lg bg-black/60 border border-gray-700 focus:border-red-500 outline-none transition"
            />
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition font-bold tracking-wide"
          >
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>
        </form>

        {/* Switch */}
        <div className="text-center mt-6 text-sm text-white/60">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-red-500 hover:underline font-semibold"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;