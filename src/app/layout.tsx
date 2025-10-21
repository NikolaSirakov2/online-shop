import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Online Store",
  description: "Online Store for selling products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
