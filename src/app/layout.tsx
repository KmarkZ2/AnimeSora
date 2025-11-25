import Nav from "@/ui/Components/Navbar/Nav";
import "./globals.css";
import Footer from "@/ui/Components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-custom">
      <body>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1 md:pl-[50px] md:pr-[50px] pl-5px pr-[5px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
