'use client';

import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { AuthProvider } from '@/contexts/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          <div className="flex min-h-screen bg-gray-100 text-gray-900">
            <Sidebar /> {/* Sidebar gère déjà l'affichage si user existe */}
            <main className="flex-1 flex flex-col">
              <Header /> {/* Header aussi */}
              <div className="flex-1 p-6">{children}</div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}