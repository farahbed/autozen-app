"use client";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AidesPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-2xl font-bold mb-4">Aide & Conseils</h1>

        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-3">Ressources Utiles</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Déclare tes revenus chaque mois ou trimestre depuis ton compte{" "}
              <a
                href="https://autoentrepreneur.urssaf.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                autoentrepreneur.urssaf.fr
              </a>
              .
            </li>
            <li>
              Garde toujours une trace de tes factures, charges et justificatifs.
            </li>
            <li>
              Prévois un budget pour les cotisations sociales (environ 22% des revenus).
            </li>
            <li>
              Utilise un compte bancaire séparé pour ton activité (obligatoire si CA {" > "} 10 000€).
            </li>
            <li>
              Anticipe les périodes creuses et mets de côté chaque mois.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-3">Liens importants</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <a
                href="https://www.impots.gouv.fr/portail/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Site officiel des impôts
              </a>
            </li>
            <li>
              <a
                href="https://www.service-public.fr/professionnels-entreprises/vosdroits/N512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Infos statut auto-entrepreneur
              </a>
            </li>
            <li>
              <a
                href="https://www.afecreation.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Agence France Entrepreneur
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ProtectedRoute>
  );
}