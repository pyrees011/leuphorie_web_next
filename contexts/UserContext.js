import React, { useEffect, createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

// firebase
import { auth } from '../config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken();
        localStorage.setItem('token', token);
        setUser({
          id: firebaseUser.uid,
          username: firebaseUser.displayName || '',
          email: firebaseUser.email || '',
          token
        });
        if (router.pathname === '/auth/login' || router.pathname === '/auth/signup') {
          router.push('/home');
        }
      } else {
        localStorage.removeItem('token');
        setUser(null);
        if (router.pathname !== '/auth/login' && router.pathname !== '/auth/signup' && router.pathname !== '/') {
          router.push('/auth/login');
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const updateUser = (userData) => {
    if (userData.token) {
      localStorage.setItem('token', userData.token);
    }
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};