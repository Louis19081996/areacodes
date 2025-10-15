import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Area Code Lookup - U.S. Phone Number Area Codes Search Tool",
    template: "%s | Area Code Lookup"
  },
  description: "Fast and accurate U.S. area code lookup tool. Search by area code, city, or state to find phone number locations, time zones, and overlays. Updated with 300+ active area codes.",
  
  openGraph: {
    title: "Area Code Lookup - U.S. Phone Number Area Codes Search Tool",
    description: "Fast and accurate U.S. area code lookup tool. Search by area code, city, or state to find phone number locations, time zones, and overlays.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
