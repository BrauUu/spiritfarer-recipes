import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spiritfarer: Cooking Book",
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
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
