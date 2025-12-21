import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();

  return (
    <div>
      <h1>Привіт, {profile?.username}</h1>
    </div>
  );
}
