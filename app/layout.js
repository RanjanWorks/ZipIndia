
import "./globals.css";
export const metadata = {
  title: "ZipIndia",
  description: "a simple indian postal code website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  );
}
