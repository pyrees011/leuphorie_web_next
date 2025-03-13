import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

// Contexts
import { useAuth } from "@/contexts/UserContext";

// Firebase
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const Login = () => {
  // TODO: Add loading state
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);

      router.push("/home");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  // TODO: finish this
  const handleLoginByGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      console.log(userCredential);
    } catch (error) {
      console.error("Login Error:", error);
    }
  }
  
  // TODO: finish this
  const handleLoginByFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    console.log(userCredential);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push("/home");
    }
  }, []);

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

            <p className="flex justify-center text-center text-gray-600 mt-4 gap-1">
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
