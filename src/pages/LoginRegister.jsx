import React, { useState } from "react";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-xl">
        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-4 text-xl font-semibold">
          <button
            className={`border-r pr-6 ${
              isLogin ? "text-[#A23CFE] font-bold" : "text-black"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`${
              !isLogin ? "text-[#A23CFE] font-bold" : "text-black"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Form Box - Fixed Size */}
        <div className="bg-white p-10 rounded-xl min-h-[350px] transition-all duration-300">
          {isLogin ? (
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-5 py-4 border border-gray-200 text-base rounded focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-5 py-4 border border-gray-200 text-base rounded focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#A23CFE] w-40 text-white font-bold py-3 rounded text-base"
              >
                LOGIN
              </button>
            </form>
          ) : (
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-5 py-4 border border-gray-200 text-base rounded focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-5 py-4 border border-gray-200 text-base rounded focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 border border-gray-200 text-base rounded focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gray-100 w-40 text-black font-bold py-3 rounded text-base"
              >
                REGISTER
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
