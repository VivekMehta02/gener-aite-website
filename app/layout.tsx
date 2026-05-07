import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wegeneraite.com"),
  title: {
    default: "GenerAite Private Limited | Intelligent Infrastructure Solutions",
    template: "%s | GenerAite"
  },
  description:
    "GenerAite designs, deploys, and integrates smart digital infrastructure across AI surveillance, IoT platforms, smart utilities, IT solutions, and command control centers.",
  keywords: [
    "GenerAite",
    "smart infrastructure",
    "AI surveillance",
    "IoT monitoring",
    "smart utilities",
    "integrated command control center",
    "smart city solutions"
  ],
  openGraph: {
    title: "GenerAite Private Limited",
    description:
      "Transforming infrastructure through intelligence with AI, IoT, IT, smart utilities, and integrated control platforms.",
    url: "https://www.wegeneraite.com",
    siteName: "GenerAite",
    images: [
      {
        url: "/assets/optimized/slide-01.jpg",
        width: 1200,
        height: 675,
        alt: "GenerAite intelligent infrastructure hero"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GenerAite Private Limited",
    description:
      "Intelligent infrastructure solutions for smarter, safer, and more sustainable operations.",
    images: ["/assets/optimized/slide-01.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
