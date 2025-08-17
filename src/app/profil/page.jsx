"use client";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProfilPage() {
  const user = {
    nom: "Farah Ben Driss",
    email: "test@mail.com",
    statut: "Auto-entrepreneur",
    dateInscription: "12 juin 2025",
  };

  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-3xl font-bold mb-6">Mon Profil</h1>

        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Nom</label>
            <p className="text-lg text-gray-800">{user.nom}</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <p className="text-lg text-gray-800">{user.email}</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Statut</label>
            <p className="text-lg text-gray-800">{user.statut}</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Date d'inscription</label>
            <p className="text-lg text-gray-800">{user.dateInscription}</p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Modifier mes informations
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}