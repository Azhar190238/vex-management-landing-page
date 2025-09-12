import type { Metadata } from "next";
import { Anton, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import BonusHeader from "../components/Header";
import Navbar from "@/components/Nabvar";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vex Management",
  description: "vex Groth engine Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${anton.variable} ${openSans.variable} antialiased`}>
        <BonusHeader />
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
