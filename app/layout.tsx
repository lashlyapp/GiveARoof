import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const siteUrl = "https://www.givearoof.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Give A Roof — Ending Homelessness",
    template: "%s — Give A Roof",
  },
  description:
    "Give A Roof is a 501(c)(3) nonprofit that turns donated airline miles, hotel points, and monetary gifts into safe nights of shelter for people experiencing homelessness.",
  keywords: [
    "homelessness",
    "nonprofit",
    "shelter",
    "airline miles donation",
    "hotel points donation",
    "Give A Roof",
    "Claudio Bono",
  ],
  openGraph: {
    title: "Give A Roof — Ending Homelessness",
    description:
      "Turning unused travel rewards into a roof over someone's head.",
    url: siteUrl,
    siteName: "Give A Roof",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Give A Roof — Ending Homelessness",
    description:
      "Turning unused travel rewards into a roof over someone's head.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
