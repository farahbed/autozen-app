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

  const login = async ({ email, password }) => {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || 'Erreur login');
      return;
    }

    // 🔐 stocker token
    localStorage.setItem('token', data.token);

    // stocker user (optionnel mais pratique)
    const userData = { email };
    localStorage.setItem('user', JSON.stringify(userData));

    setUser(userData);
    router.push('/profil');

  } catch (error) {
    console.error(error);
    alert('Erreur serveur');
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