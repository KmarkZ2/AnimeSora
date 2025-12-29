import Nav from "@/ui/Components/Navbar/Nav";
import "./globals.css";
import Footer from "@/ui/Components/Footer/Footer";
import { createClient } from "@/lib/supabase/server";
import { User, UserProfile, UserWithProfile } from "@/types/types";
import useUserStore from "@/store/useUserStore";
import StoreInitializer from "@/ui/Components/StoreInitializer";
import AuthWindow from "@/ui/Components/AuthWindow/AuthWindow";
import { getUserProfile } from "@/actions";
import Notification from "@/ui/Notification";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data } = await getUserProfile();
  const userWithProfile: UserWithProfile = { profile: data, user: user };

  return (
    <html lang="en" className="scrollbar-custom">
      <body>
        <Notification />
        <StoreInitializer user={userWithProfile} />
        <div className="flex flex-col min-h-screen">
          <AuthWindow />
          <Nav user={user} />
          <main className="flex-1 max-w-[1440px] mx-auto px-4 md:px-8 md:mt-[50px] mt-[25px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
