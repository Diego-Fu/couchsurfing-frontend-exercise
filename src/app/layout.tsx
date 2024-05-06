import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Couchsurfing Frontend Exercise",
  description: "Couchsurfing Frontend Exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Header />
            <div style={{ minHeight: "calc(100vh - 100px)" }}>{children}</div>
          <Footer />
        </>
      </body>
    </html>
  );
}
