
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user is already logged in from local storage
    const storedUser = localStorage.getItem('myntra_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        localStorage.removeItem('myntra_user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login functionality
    if (email && password) {
      const mockUser: User = {
        id: '1',
        name: email.split('@')[0],
        email: email
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('myntra_user', JSON.stringify(mockUser));

      toast({
        title: "Login Successful",
        description: `Welcome back, ${mockUser.name}!`,
      });
    } else {
      throw new Error('Please provide email and password');
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup functionality
    if (name && email && password) {
      const mockUser: User = {
        id: Date.now().toString(),
        name: name,
        email: email
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('myntra_user', JSON.stringify(mockUser));

      toast({
        title: "Signup Successful",
        description: `Welcome to Myntra, ${name}!`,
      });
    } else {
      throw new Error('Please provide all required fields');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('myntra_user');
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
