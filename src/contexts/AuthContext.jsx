'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ⬅️ nouveau
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
    setLoading(false); // ⬅️ fin du chargement
  }, []);

  const login = ({ email, password }) => {
    if (email === 'test@mail.com' && password === 'azerty') {
      const fakeUser = { email };
      localStorage.setItem('user', JSON.stringify(fakeUser));
      setUser(fakeUser);
      router.push('/profil');
    } else {
      alert('Email ou mot de passe incorrect');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);