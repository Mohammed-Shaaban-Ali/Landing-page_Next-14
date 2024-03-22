import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing-page uesing Next-14",
  description: "Landing-page uesing Next-14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
