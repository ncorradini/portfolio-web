import type { Metadata } from 'next';
import './globals.css';
import { Onest } from 'next/font/google';
import React from 'react';

export const metadata: Metadata = {
  title: 'Corradini Nicolás | Desarrollador web',
  description: 'Portofolio web de Corradini Nicolás, desarrollador web'
};

const onest = Onest({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
