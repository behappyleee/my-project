import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Crud App",
  description: "Curd App showing capabilities of Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Header />
          {children}
        </div>  
      </body>

    </html>
  );
}
