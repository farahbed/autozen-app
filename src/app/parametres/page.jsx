"use client";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ParametrePage() {
  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-3xl font-bold mb-6">Paramètres du Compte</h1>

        <div className="space-y-6 max-w-3xl">
          {/* Informations personnelles */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nom</label>
                <input
                  type="text"
                  defaultValue="Farah Ben Driss"
                  className="mt-1 w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  defaultValue="test@mail.com"
                  className="mt-1 w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Enregistrer les modifications
            </button>
          </section>

          {/* Préférences */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Préférences</h2>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="form-checkbox" defaultChecked />
              Recevoir les notifications par email
            </label>
          </section>

          {/* Sécurité */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Sécurité</h2>
            <p className="text-gray-600 mb-2">Changer votre mot de passe</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Réinitialiser le mot de passe
            </button>
          </section>
        </div>
      </div>
    </ProtectedRoute>
  );
}