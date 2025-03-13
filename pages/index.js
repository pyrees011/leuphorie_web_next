import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/components/Footer";
import FAQ from "@/components/landing/FAQ";
import Pricing from "@/components/landing/Pricing";

const LandingPage = () => {
  // TODO: add a loading fallback component
  // TODO: add a scroll to top button
  // TODO: add state management
  // TODO: clean and refactor the code
  // TODO: add more features example: chatbot, ai assistant, etc
  return (
    <div className="bg-white text-gray-900 font-mona">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[#C4D6D9]">Leuphorie</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="hover:text-[#F1AEC6] transition">Features</Link>
              <Link href="#testimonials" className="hover:text-[#F1AEC6] transition">Testimonials</Link>
              <Link href="#pricing" className="hover:text-[#F1AEC6] transition">Pricing</Link>
              <Link href="#contact" className="hover:text-[#F1AEC6] transition">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="px-4 py-2 border border-[#FAC0CC] rounded-lg text-[#FAC0CC] hover:bg-[#FAC0CC] hover:text-white transition">
                Log In
              </Link>
              <Link href="/auth/signup" className="px-5 py-2 bg-[#FAC0CC] text-white rounded-lg hover:bg-[#F1AEC6] transition">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-[#C4D6D9] mb-4">
                Optimize Your Mind & Life
              </h1>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Stay Productive, Stay Well
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                An AI-powered assistant designed to enhance your productivity and well-being through personalized tracking and intelligent insights.
              </p>
              <div className="flex space-x-4">
                <Link href="/auth/signup" className="px-8 py-3 bg-[#FAC0CC] text-white rounded-lg font-bold hover:bg-[#F1AEC6] transition">
                  Get Started Free
                </Link>
                <Link href="#demo" className="px-8 py-3 border border-[#FAC0CC] text-[#FAC0CC] rounded-lg font-bold hover:bg-[#FAC0CC] hover:text-white transition">
                  Watch Demo
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image 
                src="/assets/showcase-temp.png" 
                alt="App Showcase" 
                width={600} 
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#C4D6D9] mb-4">All-in-One AI Wellness Solution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of productivity and wellness with our comprehensive feature set.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cardFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#F1AEC6] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Pricing />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C4D6D9]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Life?
          </h2>
          <Link href="/auth/signup" className="px-8 py-3 bg-white text-[#F1AEC6] rounded-lg font-bold hover:bg-gray-100 transition">
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const cardFeatures = [
  {
    title: "Personalized AI Coaching",
    description: "Get tailored advice and insights based on your unique patterns and goals.",
    icon: "🤖"
  },
  {
    title: "Smart Habit Tracker",
    description: "Build and maintain healthy habits with intelligent tracking and reminders.",
    icon: "📊"
  },
  {
    title: "Deep Focus Mode",
    description: "Eliminate distractions and maximize your productivity with our focus tools.",
    icon: "🎯"
  }
]

export default LandingPage;
