import type { Metadata } from "next";
import { Gelasio, Poppins, Baloo_2 } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Centre Point Games Zone",
  description:
    "Centre Point School's Games Zone — logic puzzles, word games and brain challenges in one place.",
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2222%22 fill=%22%23063797%22/><text x=%2250%22 y=%2266%22 font-size=%2258%22 font-family=%22Georgia,serif%22 fill=%22%23ff6600%22 text-anchor=%22middle%22>C</text></svg>",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${gelasio.variable} ${poppins.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
