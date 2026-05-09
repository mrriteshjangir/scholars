import "./globals.css";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari"
});

export const metadata = {
  title: "Scholars Space | Town Education & Student Activity Platform",
  description:
    "Scholars Space is a trusted town-based education and student activity platform for school students and parents."
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className={`${inter.variable} ${notoSansDevanagari.variable}`}>{children}</body>
    </html>
  );
}
