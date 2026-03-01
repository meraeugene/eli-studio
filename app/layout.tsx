import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eli Studio",
  description:
    "Eli Studio is for architech and designer to create and share their work. It is a platform for architects and designers to showcase their work and connect with other professionals in the industry.",
  openGraph: {
    title: "Eli Studio",
    description:
      "Eli Studio is for architech and designer to create and share their work. It is a platform for architects and designers to showcase their work and connect with other professionals in the industry.",
    url: "https://elistudios.vercel.app/",
    siteName: "Eli Studio",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Eli Studio - Architectural Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eli Studio",
    description:
      "Eli Studio is for architech and designer to create and share their work. It is a platform for architects and designers to showcase their work and connect with other professionals in the industry.",
    images: ["/thumbnail.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
