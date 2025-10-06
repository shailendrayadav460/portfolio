import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio of Shailendra",
  description: "Welcome to my portfolio! I’m Shailendra Yadav, a passionate Full Stack Developer specializing in Next.js, React, and modern web technologies.",
  icons: {
    icon: "/favicon.ico", // public folder ka path
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderNav />
         {children}
         <Footer />
      </body>
    </html>
  );
}
