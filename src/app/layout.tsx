import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Co.Ca. Lab Dashboard",
  description: "Personal Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
