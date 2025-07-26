// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Bienvenue sur AutoZen</h1>
      <div className="text-sm text-gray-500">Votre assistant auto-entrepreneur</div>
    </header>
  );
}