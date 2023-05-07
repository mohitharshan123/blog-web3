"use client"

import "./globals.css";
import { Inter } from "next/font/google";

import { ThirdwebProvider } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThirdwebProvider activeChain="mumbai">
        <body className={inter.className}>{children}</body>
      </ThirdwebProvider>
    </html>
  );
}
