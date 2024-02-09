import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simplify",
  description: "Easy Notetaking and Collaboration",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logolight.svg",
        href: "/logolight.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logodark.jpg",
        href: "/logodark.jpg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
