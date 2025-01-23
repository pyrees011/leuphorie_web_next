import React from 'react'

// Firebase
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { cn } from '@/lib/utils';

export default function LogoutBtn({ className }) {
    // TODO: add a custom alert
    const handleLogout = async () => {
        try {
          await signOut(auth);
        //   alert("You have been logged out!");
        } catch (error) {
          console.error("Error logging out:", error);
        }
      };
    
      return (
        <button onClick={handleLogout} className={cn('p-2 bg-red-500 text-white rounded-md', className)}>
          Logout
        </button>
      );
}
  