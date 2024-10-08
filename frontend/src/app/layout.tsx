import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=' bg-[#F2F8FF] flex w-screen min-h-screen items-center justify-center'
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
