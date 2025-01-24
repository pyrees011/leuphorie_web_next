import React, { useEffect, createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

// firebase
import { auth } from '../config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null
  });

  const updateUser = (userData) => {
    setUser(userData);
  };

  const clearUser = () => {
    setUser({
      username: null,
      email: null,
      token: null
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
    const router = useRouter();
    const context = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true); // Track loading state
  
    if (context === undefined) {
      throw new Error("useUser must be used within a UserProvider");
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          user.getIdToken().then((token) => {
            context.updateUser({
              username: user.displayName,
              email: user.email,
              token: token
            });
            setIsLoading(false); // Stop loading once user data is set
          });
        } else {
          setIsLoading(false); // No user logged in
          router.push("/auth/login"); // Redirect unauthenticated users
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return { user: context.user, isLoading, updateUser: context.updateUser };
  }