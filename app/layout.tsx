import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Add this for better performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NextGen WebTech - Web Development & Digital Marketing Nepal",
  description: "Professional web development and digital marketing services in Nepal. Get custom websites, SEO, and branding solutions to grow your business online.",
  keywords: ["web development Nepal", "digital marketing", "SEO services", "website design"],
  authors: [{ name: "NextGen WebTech & Innovation" }],
  openGraph: {
    title: "NextGen WebTech - Web Development & Digital Marketing Nepal",
    description: "Professional web development and digital marketing services in Nepal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen WebTech - Web Development & Digital Marketing Nepal",
    description: "Professional web development and digital marketing services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}