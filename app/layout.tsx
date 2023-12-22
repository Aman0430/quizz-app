"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useQuiz } from "./store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  quiz,
}: {
  children: React.ReactNode;
  quiz: React.ReactNode;
}) {
  const config = useQuiz((state: any) => state.config);
  let render = config.status ? quiz : children;
  return (
    <html lang="en">
      <body className={inter.className}>{render}</body>
    </html>
  );
}
