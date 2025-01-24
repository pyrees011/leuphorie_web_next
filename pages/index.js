import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Pricing from "@/components/landing/pricing";
import Faq from "@/components/landing/faq";
import Footer from "@/components/footer";

// Contexts
import { useAuth } from "@/contexts/UserContext";

const LandingPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  // TODO: clean the useEffect
  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  // TODO: Add a loading state
  // TODO: Add a scroll to top button
  // TODO: add state management
  // TODO: refactor the page
  return (
    <div className="bg-white text-gray-900 font-mona">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold text-[#C4D6D9]">Leuphorie</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-[#F1AEC6]">Home</Link>
          <Link href="/features" className="hover:text-[#F1AEC6]">Features</Link>
          <Link href="/about" className="hover:text-[#F1AEC6]">About</Link>
          <Link href="/wellness" className="hover:text-[#F1AEC6]">Wellness</Link>
          <Link href="/community" className="hover:text-[#F1AEC6]">Community</Link>
          <Link href="/support" className="hover:text-[#F1AEC6]">Support</Link>
        </div>
        <div>
          <Link href="/auth/login" className="px-4 py-2 border border-[#FAC0CC] rounded-lg text-[#FAC0CC] hover:bg-[#FAC0CC] hover:text-white transition">
            Log In
          </Link>
          <Link href="/auth/signup" className="ml-4 px-5 py-2 bg-[#FAC0CC] text-white rounded-lg hover:bg-[#F1AEC6] transition">
            Sign Up
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="text-center py-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-[#C4D6D9]"
        >
          Optimize Your Mind & Life.
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl font-bold text-gray-800 mt-2"
        >
          Stay Productive, Stay Well.
        </motion.h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          An AI-powered assistant to track wellness & boost productivity effortlessly.
        </p>
        <Link href="/download" className="mt-6 inline-block bg-[#FAC0CC] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#F1AEC6] transition">
          Get Started for Free
        </Link>

        {/* Hero Image */}
        <div className="flex justify-center mt-10">
          <Image src="/assets/showcase-temp.png" alt="App Showcase" width={400} height={400} />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center text-[#C4D6D9]">All-in-One AI Wellness Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {["Personalized AI Coaching", "Smart Habit Tracker", "Deep Focus Mode"].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#F1AEC6]">{feature}</h3>
              <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
      {/* TODO: Footer */}
    </div>
  );
};

export default LandingPage;
