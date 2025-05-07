import { Martel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSInitializer from "@/components/AOSInitializer";

const martel = Martel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-martel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Svarupa - Science of Spirit",
  description: "Bridging ancient Sanskrit wisdom with modern technology",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${martel.variable} ${inter.variable} font-inter antialiased`}>
        <AOSInitializer />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
