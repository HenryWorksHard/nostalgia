import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$2024 - Remember When",
  description: "A trip back to simpler times. Windows XP memecoin experience.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "64x64" },
      { url: "/favicon-128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
        {/* Preload video as early as possible */}
        <link rel="preload" href="/video/intro.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/images/bliss.jpg" as="image" />
      </head>
      <body className="antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}

