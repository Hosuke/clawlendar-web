import { Cormorant_Garamond, Noto_Sans_TC } from "next/font/google";

import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const sans = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Clawlendar WebGL | Seven Governors + Four Remainders",
  description:
    "Next.js + react-three-fiber visualization layer for Clawlendar with dedicated Four Remainders layer and 3D solar-system orbits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
