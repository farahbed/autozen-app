'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Charger le token et user au démarrage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('currentUser');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login : appeler l'API
  const login = async ({ email, password }) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Email ou mot de passe incorrect');
        return false;
      }

      // Stocker le token et l'utilisateur (tu peux aussi récupérer d'autres infos via JWT)
      localStorage.setItem('token', data.token);
      localStorage.setItem('currentUser', JSON.stringify({ email })); 
      setUser({ email });

      router.push('/dashboard');
      return true;
    } catch (error) {
      console.error(error);
      alert('Erreur serveur');
      return false;
    }
  };

  // Register : appeler l'API
  const register = async ({ nom, email, password }) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Erreur inscription');
        return false;
      }

      // Stocker le token et l'utilisateur
      localStorage.setItem('token', data.token);
      localStorage.setItem('currentUser', JSON.stringify({ nom, email }));
      setUser({ nom, email });

      router.push('/dashboard');
      return true;
    } catch (error) {
      console.error(error);
      alert('Erreur serveur');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);