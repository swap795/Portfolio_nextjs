import type { Metadata } from "next";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Swapnil Thapa | Software + Quality Engineering",
  description: "A proof-first portfolio for Swapnil Thapa, software and quality engineer.",
  icons: { icon: `${basePath}/favicon.ico` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
