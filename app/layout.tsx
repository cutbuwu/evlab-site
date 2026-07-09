import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Lab — ADB Unlock for BYD & DiLink 5+ | Remote QR Authentication",
  description:
    "Remote ADB unlock service for BYD and Denza vehicles with DiLink 5.0+ systems. QR code authentication in under 5 minutes. Works worldwide on all models — Shark 6, Sealion 8, Seal 06/Touring, Dolphin Surf, Atto 2, and more.",
  keywords: [
    "BYD ADB unlock",
    "DiLink 5 unlock",
    "BYD QR code unlock",
    "BYD engineering menu",
    "BYD sideload apps",
    "DiPlus BYD",
    "BYD dashcam install",
    "Denza ADB unlock",
    "BYD sentry mode",
    "BYD third party apps",
    "DiLink 5.0 ADB",
    "BYD remote unlock",
    "BYD ADB authentication",
    "BYD DiLink unlock service",
  ],
  metadataBase: new URL("https://evlab.au"),
  openGraph: {
    title: "EV Lab — ADB Unlock for BYD & DiLink 5+",
    description:
      "Remote ADB unlock service for BYD and Denza vehicles. QR code authentication in under 5 minutes. Works worldwide.",
    url: "https://evlab.au",
    siteName: "EV Lab",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EV Lab — ADB Unlock Service",
  description:
    "Remote ADB unlock service for BYD and Denza vehicles with DiLink 5.0+ systems. QR code authentication in under 5 minutes.",
  url: "https://evlab.au",
  provider: {
    "@type": "Organization",
    name: "EV Lab",
    url: "https://evlab.au",
  },
  areaServed: "Worldwide",
  serviceType: "Vehicle Software Unlock",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "AUD",
    description: "Standard ADB Unlock Service",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
