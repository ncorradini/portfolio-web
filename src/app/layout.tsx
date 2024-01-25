import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import React from 'react';

export const metadata: Metadata = {
  title: 'Corradini Nicolás',
  description: 'Portofolio web de Corradini Nicolás, desarrollador web'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${GeistSans.className} bg-white dark:bg-chineseBlack`}>
        {children}
      </body>
    </html>
  );
}
