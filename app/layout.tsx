import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ScaleForge AI",
  description: "AI-powered short-form ad and reel analysis platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
