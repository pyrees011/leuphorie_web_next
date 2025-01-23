import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login Successful! (Simulated)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-mona">
      <div className="bg-[#E8F3E2] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-[#F1AEC6] mb-6">Log In</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center h-full">
          <div className="mb-4">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 font-semibold mt-1 text-xs">{errors.email.message}</p>}
          </div>

          <div className="mb-8">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required", minLength: 6 })}
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 font-semibold mt-1 text-xs">{errors.password.message}</p>}
          </div>

          <div className="flex flex-col justify-center mt-auto">
            <button
              type="submit"
              className="w-full bg-[#FAC0CC] text-white py-2 rounded-lg font-bold hover:bg-[#F1AEC6] transition"
            >
              Log In
            </button>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account? <a href="/auth/signup" className="text-[#FAC0CC] font-bold">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
      <div>
        {/* TODO: add maybe a login image on the right side */}
      </div>
    </div>
  );
};

export default Login;
