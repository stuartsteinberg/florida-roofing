import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Florida Roofing",
  description: "The florida roofing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black  " >
        {children}
      </body>
    </html>
  );
}
