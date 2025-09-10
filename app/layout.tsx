import type { Metadata, Viewport } from "next";
import "@/public/styles/globals.css";
import { TChildren } from "@/src/types";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "N'Gola Explorer",
  description: "This is a lightweight Angola entry point for tourism!",
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "https://ngola-explorer.vercel.app" },
  openGraph: {
    title: "N'Gola Explorer - Tourism in Angola",
    description: "This is a lightweight Angola entry point for tourism!",
    url: "https://ngola-explorer.vercel.app",
    images: [
      {
        url: "https://ngola-explorer.vercel.app/images/logo.jpg",
        width: 1200,
        height: 600,
        alt: "Angola flag",
      },
    ],
    type: "website",
  },
  icons: {
    apple: "https://ngola-explorer.vercel.app/images/logo.jpg",
    icon: "https://ngola-explorer.vercel.app/images/logo.jpg",
    shortcut: "https://ngola-explorer.vercel.app/images/logo.jpg",
  },
  keywords: [
    "visit angola",
    "angola tour",
    "n'gola",
    "n'gola explorer",
    "tourism in angola",
    "angola",
  ],
  creator: "João Afonso",
};

export default function RootLayout({ children }: TChildren) {
  return (
    <html lang="en">
      <body className="antialiased max-w-screen ">
        <main className="bg-red-600 text-yellow-300 min-h-screen">
          {children}
        </main>
        <footer className="bg-[#121212] fixed left-0 right-0 bottom-0 flex items-center py-1">
          <span className="text-sm font-bold text-yellow-300 pl-5 pb-2.5">
            &copy; N'Gola Explorer. All rights reserveds{" "}
            {new Date().getFullYear()}
          </span>
        </footer>
      </body>
    </html>
  );
}
