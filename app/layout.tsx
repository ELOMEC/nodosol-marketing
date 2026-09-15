import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

// Preview deployment for the nodosol marketing pages. Editors edit
// landing + pitch here, preview URL reflects changes immediately, and
// Mladen copies approved edits back to the main nodosol repo before
// they land on nodosol.com.
export const metadata: Metadata = {
  metadataBase: new URL("https://preview.nodosol.com"),
  title: {
    default: "nodosol — Solana super-app for compliant RWA + creator payments",
    template: "%s — nodosol",
  },
  description:
    "Tokenize real-world assets, sell event tickets, rent out property, and take creator payments on Solana. Licenced RWA issuer framework, Token-2022 rails, confidential-ready architecture.",
  // Preview is NOT production; keep it out of search indexes.
  robots: { index: false, follow: false },
  openGraph: {
    title: "nodosol — Solana super-app for compliant RWA + creator payments",
    description:
      "Licenced RWA + event tickets + rentals + OTC escrow on Solana. Token-2022, multisig-governed, confidential-ready.",
    url: "https://preview.nodosol.com",
    siteName: "nodosol (preview)",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nodosol — Solana super-app for compliant RWA + creator payments",
    description:
      "Licenced RWA + event tickets + rentals + OTC escrow on Solana.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
