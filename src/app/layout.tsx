import type { Metadata } from "next";
import { Lora, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { SearchProvider } from "@/contexts/SearchContext";
import Footer from "@/components/Footer/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Query Technologies - City Government Example",
  description: "Created by Query Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${openSans.variable} antialiased`}
      >
        <SearchProvider>
          <Header />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
