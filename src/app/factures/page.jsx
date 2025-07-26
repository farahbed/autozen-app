import React from "react";

export default function FacturationPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mes factures</h2>

      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          ➕ Nouvelle facture
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">N°</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Montant</th>
              <th className="px-4 py-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">#001</td>
              <td className="px-4 py-2">Société Alpha</td>
              <td className="px-4 py-2">05/07/2025</td>
              <td className="px-4 py-2">450 €</td>
              <td className="px-4 py-2 text-green-600 font-semibold">Payée</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">#002</td>
              <td className="px-4 py-2">Client Perso</td>
              <td className="px-4 py-2">17/07/2025</td>
              <td className="px-4 py-2">700 €</td>
              <td className="px-4 py-2 text-yellow-600 font-semibold">En attente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}