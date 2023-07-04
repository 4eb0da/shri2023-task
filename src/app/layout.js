import { Header } from "../components/header";
import { Footer } from "../components/footer";

import "./globals.css";

export const metadata = {
  title: "Яндекс.Дом",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
