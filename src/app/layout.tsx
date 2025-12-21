import Nav from "@/ui/Components/Navbar/Nav";
import "./globals.css";
import Footer from "@/ui/Components/Footer/Footer";
import { createClient } from "@/lib/supabase/server";
import { User } from "@/types/types";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className="scrollbar-custom">
      <body>
        <div className="flex flex-col min-h-screen">
          <Nav user={user} />
          <main className="flex-1 md:px-[100px] px-[10px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
