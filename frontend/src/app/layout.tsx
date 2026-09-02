import type { Metadata } from "next";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import { fontPrimary } from "./fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "СКК",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={fontPrimary.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
