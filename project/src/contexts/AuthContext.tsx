import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: Omit<User, 'id'>) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users data
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@javex.com',
    name: 'Admin User',
    role: 'admin',
    department: 'Management',
    joinDate: '2020-01-15',
    birthday: '1985-06-20'
  },
  {
    id: '2',
    email: 'john@javex.com',
    name: 'John Smith',
    role: 'employee',
    department: 'Web Development',
    joinDate: '2021-03-10',
    birthday: '1990-12-05'
  },
  {
    id: '3',
    email: 'sarah@javex.com',
    name: 'Sarah Johnson',
    role: 'employee',
    department: 'Graphic Design',
    joinDate: '2021-07-22',
    birthday: '1988-09-15'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('javex_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock authentication
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password123') {
      setUser(foundUser);
      localStorage.setItem('javex_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('javex_user');
  };

  const signup = async (userData: Omit<User, 'id'>): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock signup
    const newUser: User = {
      ...userData,
      id: Date.now().toString()
    };
    
    setUser(newUser);
    localStorage.setItem('javex_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};