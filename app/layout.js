import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "BlueCo Media | Predictable Job Acquisition System for Home Services",
  description:
    "Stop chasing leads. Get a predictable system that fills your calendar with booked jobs. Done-for-you lead generation and AI-powered appointment booking for home service businesses.",
  keywords:
    "home service marketing, lead generation, appointment booking, AI marketing, predictable revenue, home service business growth",
  openGraph: {
    title: "BlueCo Media | Predictable Job Acquisition",
    description:
      "Done-for-you lead generation system for home service businesses. Fill your calendar with booked jobs consistently.",
    url: "https://bluecomedia.com",
    siteName: "BlueCo Media",
    images: [
      {
        url: "https://bluecomedia.com/logo.png",
        width: 1200,
        height: 630,
        alt: "BlueCo Media - Predictable Job Acquisition",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueCo Media | Predictable Job Acquisition",
    description:
      "Done-for-you lead generation system for home service businesses.",
    images: ["https://bluecomedia.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
