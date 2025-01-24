import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";

const defaultFont = localFont({
  src: [
    {
      path: '../../public/fonts/nunito.ttf',
      style: 'normal'
    },
    {
      path: '../../public/fonts/nunito-italic.ttf',
      style: 'italic'
    }
  ],
  variable: "--font-default",
})

const titleFont = localFont({
  src: '../../public/fonts/lora.ttf',
  variable: "--font-title",
})

export const metadata: Metadata = {
  title: "📝 Spiritfarer: Recipes Book",
  description: "Here you can cook your favorite Spiritfarer dishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${defaultFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
