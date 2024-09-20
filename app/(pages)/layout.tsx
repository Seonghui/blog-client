import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Stella's dev blog",
  description: "스텔라의 기술 블로그",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`container mx-auto px-4 ${GeistMono.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
