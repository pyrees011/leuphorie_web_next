import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E8F3E2]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8DC63F]"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8DC63F]"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8DC63F] text-white py-2 rounded-lg font-bold hover:bg-[#76A52F] transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">or sign up with</p>

        <div className="flex justify-center mt-4">
          <button className="bg-[#E8F3E2] p-2 rounded-full mx-2">
            <img src="/globe.svg" alt="Google" className="w-6" />
          </button>
          <button className="bg-[#E8F3E2] p-2 rounded-full mx-2">
            <img src="/next.svg" alt="Microsoft" className="w-6" />
          </button>
          <button className="bg-[#E8F3E2] p-2 rounded-full mx-2">
            <img src="/github.svg" alt="GitHub" className="w-6" />
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Have an account? <a href="/login" className="text-[#8DC63F] font-bold">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
