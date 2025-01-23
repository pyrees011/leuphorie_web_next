import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

// custom hooks
import { useUser } from "../contexts/UserContext";

// components
import LogoutBtn from "../components/logoutBtn";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { user, isLoading } = useUser();

  // TODO: Add loading fallback component
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E8F3E2]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#C4D6D9]">Welcome to Leuphorie {user.username}</h1>
        
        <div className="mt-6">
          {/* <Link href="/login">
            <a className="px-6 py-3 bg-[#FAC0CC] text-white rounded-lg font-bold hover:bg-[#F1AEC6] transition m-2">
              Log in
            </a>
          </Link> */}
          
          {/* <Link href="/signup">
            <a className="px-6 py-3 bg-[#C4D6D9] text-white rounded-lg font-bold hover:bg-[#F1AEC6] transition m-2">
              Sign Up
            </a>
          </Link> */}
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
}
