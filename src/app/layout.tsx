import type { Metadata } from "next";
import { Josefin_Sans, Ubuntu } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});


const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"], // choose what you need
  subsets: ["latin"],
  variable: "--font-ubuntu", // optional (for CSS variable usage)
});
export const metadata: Metadata = {
  title: "Pothabathula Pradeep Varma | Full Stack Developer",
  description: "Full Stack Developer skilled in React, Express.js, and Python. Passionate about building scalable web applications and real-world projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} ${ubuntu.variable}`}>
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
