// src/components/Sidebar.jsx
import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
      <div className="text-2xl font-bold mb-6">AutoZen</div>
      <nav className="flex flex-col gap-4 text-sm">
        <a href="/" className="hover:text-blue-600">🏠 Tableau de bord</a>
        <a href="/factures" className="hover:text-blue-600">🧾 Factures</a>
        <a href="/charges" className="hover:text-blue-600">💼 Charges</a>
        <a href="/aides" className="hover:text-blue-600">🎯 Aides</a>
        <a href="/profil" className="hover:text-blue-600">👤 Mon profil</a>
      </nav>
    </aside>
  );
}