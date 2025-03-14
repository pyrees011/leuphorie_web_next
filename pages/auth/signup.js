import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

// axios
import { useAxiosInstance } from "@/axios/axios";

// hooks
import { useTasks } from "@/hooks/useTasks";

// Firebase
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const axiosInstance = useAxiosInstance("settings");
  const { createCategory } = useTasks();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [authError, setAuthError] = useState("");
  // ✅ Updated onSubmit function
  const onSubmit = async (data) => {
    try {
      setAuthError("");
      
      // 1️⃣ Create User in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      
      await updateProfile(user, {
        displayName: data.username,
      });

      // 2️⃣ Call backend to create default settings
      await createUserSettings(user.uid, data);

      // 3️⃣ Create default categories
      await createCategory("Personal");
      await createCategory("Work");
      await createCategory("Health");

      // 4️⃣ Redirect to health survey
      router.push("/survey/health");
    } catch (error) {
      console.error("Sign Up Error:", error);
      switch (error.code) {
        case "auth/email-already-in-use":
          setAuthError("This email is already registered");
          break;
        case "auth/invalid-email":
          setAuthError("Invalid email address");
          break;
        case "auth/operation-not-allowed":
          setAuthError("Email/password accounts are not enabled");
          break;
        case "auth/weak-password":
          setAuthError("Password is too weak");
          break;
        default:
          setAuthError("An error occurred during signup");
      }
    }
  };

  const createUserSettings = async (userId, data) => {
    try {
      const defaultSettings = {
        username: data.username,
        email: data.email,
      }

      // ✅ POST request to create user settings
      await axiosInstance.post(`settings/${userId}`, defaultSettings);
      console.log("User settings created successfully.");
    } catch (error) {
      console.error("Error creating user settings:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push("/home");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen font-mona">
      <div className="bg-[#E8F3E2] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-[#F1AEC6] mb-6">Sign Up</h2>

        {authError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {authError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-red-500 font-semibold mt-1 text-xs">{errors.username.message}</p>}
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
                minLength: { value: 6, message: "Password must be at least 6 characters long" },
              })}
              className="w-full p-2 border border-[#C4D6D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AEC6]"
              placeholder="Create a password"
            />
            {errors.password && <p className="text-red-500 font-semibold mt-1 text-xs">{errors.password.message}</p>}
          </div>

          <div className="mb-8">
            <label className="block text-[#F1AEC6] text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: (val) => watch("password") === val || "Passwords do not match",
              })}
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
