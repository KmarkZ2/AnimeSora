import { getUserProfile } from "@/actions";
import { createClient } from "@/lib/supabase/server";
import ProfileContent from "@/ui/Components/ProfileContent/ProfileContent";
import ModalBg from "@/ui/ModalBg";
import { redirect } from "next/navigation";

export default async function Profile() {
  const supabase = await createClient();
  const { data: user, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/");
  const { data: profile, error: er } = await getUserProfile();
  if (er || !profile) redirect("/");

  return (
    <div className="w-full">
      <ProfileContent initialData={{ profile, user: user.user }} />
    </div>
  );
}
