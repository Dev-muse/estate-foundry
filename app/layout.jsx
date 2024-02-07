import { Inter } from "next/font/google";
import "./globals.css";


// components
import { Header, Footer } from './components'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estate Foundry",
  description: "Your personal foundry for luxury homes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-[1440px] mx-auto bg-white ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
