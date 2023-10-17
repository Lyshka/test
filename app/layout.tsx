import ScrollContextProvider from "@/context/ScrollContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ScrollContextProvider>
        <body>{children}</body>
      </ScrollContextProvider>
    </html>
  );
}
