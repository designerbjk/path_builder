import "@/styles/globals.css";
import TopNavBar from "@/components/topnavbar";
import Footer from "@/components/footer";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "7Loops",
  description: "Understanding who you are",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <TopNavBar />
        <main className="flex-1">{}</main>
        <Footer />
      </body>
    </html>
  );
}
