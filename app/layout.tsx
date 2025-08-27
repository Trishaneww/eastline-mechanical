import type { Metadata } from "next";
import "./globals.css";
import { Host_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Host_Grotesk({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "East Line Mechanical Plumbing",
  description:
    "Reliable plumbing services in the Greater Toronto Area. East Line Mechanical offers expert repairs, installations, and emergency plumbing solutions.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
