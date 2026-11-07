import type { ReactNode } from "react";
import AppHeader from "../components/app-header";
import "./globals.css";

export const metadata = {
  title: "Coffee Orders",
  description: "Sistema de gestión de pedidos de café",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
