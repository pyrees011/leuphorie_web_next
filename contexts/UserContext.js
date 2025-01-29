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
              id: user.uid,
              username: user.displayName,
              email: user.email,
              token: token
            });
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
          router.push("/auth/login");
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return { user: context.user, isLoading, updateUser: context.updateUser };
  }

export const useAuth = () => {
  const router = useRouter()
  const authContext = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  
    if (authContext === undefined) {
      throw new Error("useUser must be used within a UserProvider");
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          user.getIdToken().then((token) => {
            authContext.updateUser({
              username: user.displayName,
              email: user.email,
              token: token
            });
            router.push("/home");
          });
        } else {
          setIsLoading(false);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return { user: authContext.user, isLoading, updateUser: authContext.updateUser };
}