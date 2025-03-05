import { Inter, Space_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust if needed
});

export const metadata = {
  title: "ELMESSAOUDI Oussama's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
