import React from "react";
import { Mail, Lock } from "lucide-react"; 

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[url('https://t4.ftcdn.net/jpg/06/91/05/19/360_F_691051979_Xr9vx5g4lX59PT27nFe4Y7AHUuGh4i2S.jpg')] bg-cover bg-center">
      <div className="bg-gray p-12 rounded-3xl border-2 border-gray-400 max-w-md w-full">
        <header className="mb-10"> 
          <h1 className="text-4xl font-bold text-gray-300">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            Welcome back! Please Login.
          </p>
        </header>
        <form className="space-y-7">
        
     
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-gray-400 font-medium text-lg">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="email"
                type="email"
                className="w-full px-5 py-3.5 border-2 pl-10
                       border-gray-100 rounded-3xl
                       focus:border-blue-200 focus:ring-1
                       focus:ring-blue-100 
                       text-gray-300
                       transition-all duration-200 outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

       
          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-gray-400 font-medium text-lg">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="password"
                type="password"
                className="w-full px-5 py-3.5 border-2 pl-10
                       border-gray-100 rounded-3xl
                       focus:border-blue-200 focus:ring-1
                       focus:ring-blue-100
                       text-gray-300 
                       transition-all duration-200 outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-blue-300 
                         focus:ring-blue-300 transition"
              />
              <label
                htmlFor="remember"
                className="ml-3 text-gray-400 font-medium">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-blue-300 hover:text-blue-400 font-medium 
                         transition-colors duration-200">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-8 py-4
                       bg-gray-500
                       hover:bg-gray-600 
                       text-white 
                       font-semibold rounded-xl shadow-sm
                       transform hover:-translate-y-0.5 transition-all 
                       duration-200 active:translate-y-0">
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 mt-10 text-sm">
          Don't have an account?{" "}
          <button 
            className="text-blue-300 font-medium hover:bg-blue-400">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}