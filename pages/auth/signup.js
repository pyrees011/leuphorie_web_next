import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("Sign Up Successful:", userCredential.user);
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#E8F3E2] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-[#F1AEC6] mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 font-semibold mt-1 text-xs">{errors.fullName.message}</p>}
          </div>

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

          <div className="mb-4">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Create a password"/>
            {errors.password && <p className="text-red-500 font-semibold mt-1 text-xs">{errors.password.message}</p>}
          </div>

          <div className="mb-8">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", { required: "Please confirm your password" })}
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 font-semibold mt-1 text-xs">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FAC0CC] text-white py-2 rounded-lg font-bold hover:bg-[#F1AEC6] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/auth/login" className="text-[#FAC0CC] font-bold">Log In</a>
        </p>
      </div>
      <div>
        {/* TODO: add maybe a signup image on the right side */}
      </div>
    </div>
  );
};

export default SignUp;
