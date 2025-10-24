import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import ToastContainer from "../components/ToastContainer";
export const metadata: Metadata = {
  title: "Online Store",
  description: "Online Store for selling products",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <CartProvider>
          <FavoritesProvider>
            <Header />
            {children}
            <ToastContainer />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
