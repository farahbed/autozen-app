'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Charge l'utilisateur connecté
  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) setUser(JSON.parse(userData));
    setLoading(false);
  }, []);

  // Login : cherche l'utilisateur dans la liste
  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.email === email && u.password === password);

    if (existingUser) {
      localStorage.setItem('currentUser', JSON.stringify(existingUser));
      setUser(existingUser);
      router.push('/dashboard');
    } else {
      alert('Email ou mot de passe incorrect');
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    router.push('/login');
  };

  // Register : ajoute un utilisateur
  const register = ({ nom, email, password }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find(u => u.email === email)) {
      alert('Cet email est déjà utilisé');
      return false;
    }

    const newUser = { nom, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);
    router.push('/dashboard');
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);