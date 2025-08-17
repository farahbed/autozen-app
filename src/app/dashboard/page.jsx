"use client";
import React from "react";
import { FaMoneyBillWave, FaFileInvoiceDollar, FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>
        <h2 className="text-3xl font-bold mb-6">Tableau de bord</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4">
            <FaMoneyBillWave className="text-4xl text-green-500" />
            <div>
              <h3 className="text-md font-semibold text-gray-700">Revenus ce mois</h3>
              <p className="text-2xl font-bold text-green-600">2 450 €</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4">
            <FaFileInvoiceDollar className="text-4xl text-red-500" />
            <div>
              <h3 className="text-md font-semibold text-gray-700">Charges à payer</h3>
              <p className="text-2xl font-bold text-red-600">980 €</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4">
            <FaCalendarCheck className="text-4xl text-blue-500" />
            <div>
              <h3 className="text-md font-semibold text-gray-700">Prochaine déclaration</h3>
              <p className="text-lg text-gray-600">15 août 2025</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">📋 Checklist rapide</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-2" /> Créer une nouvelle facture
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-2" /> Vérifier les charges à déclarer
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-2" /> Suivre les cotisations à l’URSSAF
            </li>
          </ul>
        </div>
      </div>
    </ProtectedRoute>
  );
}