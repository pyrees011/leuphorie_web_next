import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E8F3E2]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-[#C4D6D9] mb-6">Sign Up</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FAC0CC] text-white py-2 rounded-lg font-bold hover:bg-[#F1AEC6] transition"
          >
            Sign Up
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
          Already have an account? <a href="/login" className="text-[#FAC0CC] font-bold">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
