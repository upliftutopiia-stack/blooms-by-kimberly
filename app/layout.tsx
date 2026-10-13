
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BloomsByKimberly | Floral Boutique Website Concept",
  description:
    "An independent floral boutique website concept for BloomsByKimberly in Houston, Texas. Explore bouquet inspiration and prepare a custom order enquiry.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
