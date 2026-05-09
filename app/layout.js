import "./globals.css";

export const metadata = {
  title: "Scholars Space | Town Education & Student Activity Platform",
  description:
    "Scholars Space is a trusted town-based education and student activity platform for school students and parents."
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
