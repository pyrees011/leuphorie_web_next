import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Link href="/login">
        <a className="px-6 py-3 bg-[#8DC63F] text-white rounded-lg font-bold hover:bg-[#76A52F] transition">
          Go to Login
        </a>
      </Link>
    </div>
  );
}
