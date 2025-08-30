import type { Metadata } from "next";
import { Anton, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import BonusHeader from "../components/Navbar";

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
  title: "Hone Coach | business Coach for enterprenures",
  description: "Hone Coach | business Coach for enterprenures",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
