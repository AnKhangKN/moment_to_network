'use client'

import Snowfall from "react-snowfall";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-20 fixed top-0 left-0 right-0">
          <Snowfall />
        </div>
        {children}
      </body>
    </html>
  );
}
