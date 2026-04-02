'use client';
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function RegisterPage() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Erreur inscription");
      return;
    }

    alert("Compte créé ✅");

  } catch (error) {
    console.error(error);
    alert("Erreur serveur");
  }
};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Inscription</h2>

        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="mb-4 w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full px-4 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}