import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import { Lato } from "next/font/google";
import { Metadata } from "next";
import SmallHeaderX from "@/components/HeaderX";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "New Touch",
    template: "%s | New Touch",
  },
  description: "",
  // icons: "/images/logo-head.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-400`}>
        <Header />
        <SmallHeaderX />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
