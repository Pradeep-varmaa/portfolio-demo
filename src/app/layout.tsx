
import type { Metadata } from "next";
import { Josefin_Sans, Ubuntu } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Pothabathula Pradeep Varma | Full Stack Developer",
  description:
    "Full Stack Developer skilled in React, Express.js, and Python. Passionate about building scalable web applications and real-world projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} ${ubuntu.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4784641470229803"
          crossOrigin="anonymous"
        />
      </head>
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
