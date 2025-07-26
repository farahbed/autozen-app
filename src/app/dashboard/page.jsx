import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tableau de bord</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Revenus ce mois</h3>
          <p className="text-2xl font-bold text-green-500">2 450 €</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Charges à payer</h3>
          <p className="text-2xl font-bold text-red-500">980 €</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Prochaine déclaration</h3>
          <p className="text-md text-gray-600">15 août 2025</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Checklist rapide</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Créer une nouvelle facture</li>
          <li>Vérifier les charges à déclarer</li>
          <li>Suivre les cotisations à l’URSSAF</li>
        </ul>
      </div>
    </div>
  );
}