import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$Tradition - Remember When",
  description: "A trip back to simpler times. Windows XP memecoin experience.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
