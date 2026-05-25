import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Countera | All-in-one POS for small business",
  description:
    "A simple browser-based POS for small businesses to run checkout, customers, inventory, staff, and daily reports.",
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
