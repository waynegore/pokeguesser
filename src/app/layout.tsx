import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokeGuesser",
  description: "A pokemon guessing game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                  {children}
              </main>
              <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                  <a
                      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                      href="https://pokeapi.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <Image
                          aria-hidden
                          src="/pokeball.svg"
                          alt="Pokeball icon"
                          width={16}
                          height={16}
                      />
                      Powered by PokeAPI
                  </a>
              </footer>
          </div>
      </body>
    </html>
  );
}
