import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modal-provider";
import { ToastProvider } from "@/components/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genie - your AI entity",
  description:
    "Generate images, videos, code, textual content with the help of our AI powered entity Genie!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          <ToastProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
