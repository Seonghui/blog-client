import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Stella's dev blog",
  description: "스텔라의 기술 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${GeistMono.className}`}>{children}</body>
    </html>
  );
}
