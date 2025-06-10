import type { Metadata } from "next";
import "./styles/globals.css"

export const metadata: Metadata = {
  title: "Kyra Moore"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased h-screen">
        {children}
      </body>
    </html>
  );
}
