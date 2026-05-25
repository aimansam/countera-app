import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Countera | POS for salons and barbers",
  description:
    "A simple browser-based POS for salons and barbers to sell services, track clients, manage staff, and see daily revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
