import React from "react";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen bg-gray-100 text-gray-900">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}