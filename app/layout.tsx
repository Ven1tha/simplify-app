import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simplify",
  description: "Easy Notetaking and Collaboration",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logolight.jpg",
        href: "/logolight.jpg",
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="simplify-theme"
          >
          {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
