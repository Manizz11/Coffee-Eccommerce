import React, { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

type LoginProps = {
  onLogin: (data: LoginForm) => void;
  onSwitch: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin, onSwitch }) => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onLogin(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="max-w-5xl w-full bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-red-600 grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-red-700 to-black flex flex-col justify-center items-center p-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
          <p className="text-gray-200 text-center max-w-sm">
            Login to continue accessing your account and dashboard.
          </p>
          <div className="mt-8 w-40 h-40 rounded-full bg-red-600/20 border-4 border-red-500 flex items-center justify-center text-5xl">
            🔐
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 text-white">
          <h2 className="text-4xl font-bold mb-2">Login</h2>
          <p className="text-gray-400 mb-8">Enter your credentials</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-red-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-black border border-red-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-semibold shadow-lg shadow-red-600/30"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <span onClick={onSwitch} className="text-red-500 cursor-pointer font-semibold hover:text-red-400">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
