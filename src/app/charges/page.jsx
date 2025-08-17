'use client';
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";


export default function ChargesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mes Charges</h1>

      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          ➕ Ajouter une charge
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Montant</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">03/07/2025</td>
              <td className="px-4 py-2">Achat matériel bureautique</td>
              <td className="px-4 py-2">145 €</td>
              <td className="px-4 py-2">Matériel</td>
              <td className="px-4 py-2 text-green-600 font-semibold">Payée</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">15/07/2025</td>
              <td className="px-4 py-2">Frais de déplacement</td>
              <td className="px-4 py-2">72 €</td>
              <td className="px-4 py-2">Transport</td>
              <td className="px-4 py-2 text-yellow-600 font-semibold">En attente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}