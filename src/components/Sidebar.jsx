'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  if (!user) return null; // ❌ Si pas connecté, on ne rend rien

  const navItems = [
    { href: "/dashboard", label: "Tableau de bord", icon: "🏠" },
    { href: "/factures", label: "Factures", icon: "🧾" },
    { href: "/charges", label: "Charges", icon: "💼" },
    { href: "/aides", label: "Aides", icon: "🎯" },
    { href: "/profil", label: "Mon profil", icon: "👤" },
    { href: "/parametres", label: "Paramètres", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
      <div className="text-2xl font-bold mb-8 text-blue-600">AutoZen</div>
      <nav className="flex flex-col gap-4 text-sm">
        {navItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 transition ${
              pathname === href ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
            }`}
          >
            <span>{icon}</span> {label}
          </Link>
        ))}

        <button
          onClick={logout}
          className="mt-8 text-sm text-red-600 hover:underline text-left"
        >
          🚪 Se déconnecter
        </button>
      </nav>
    </aside>
  );
}