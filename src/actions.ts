"use server"

import { revalidatePath } from "next/cache";
import { createClient } from "./lib/supabase/server"
import { ApiResponse, UpdateProfileData, User, UserProfile, UserWithProfile } from "./types/types";

export async function userLogin(password: string, email: string): Promise<ApiResponse<User>> {
    const supabase = await createClient();
    const { data: user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    if (error) return { data: null, error: error!.message }
    revalidatePath("/", "layout");
    return { data: user.user }
}
export async function userRegister(password: string, email: string, username: string): Promise<ApiResponse<User>> {
    const supabase = await createClient();
    const { data: user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { username },
        },
    })

    if (error || !user.user) return { data: null, error: error!.message || "Registration failed" }
    revalidatePath("/", "layout");
    return { data: user.user }
}

export async function userLogout() {
    const supabase = await createClient();
    await supabase.auth.signOut()
    revalidatePath("/", "layout");
}

export async function getUserProfile(): Promise<ApiResponse<UserProfile>> {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
        return { data: null, error: "Unauthorized" };
    }
    const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (error) return { data: null, error: error.message }

    return { data: profile }

}

export async function updateUser(formData: UpdateProfileData): Promise<ApiResponse<UserWithProfile>> {
    const supabase = await createClient();

    const { data: user, error } = await supabase.auth.getUser();
    if (error || !user) return { data: null, error: error?.message || "Unauthorized" }

    const { data: profile, error: er } = await supabase
        .from("profiles")
        .update(formData)
        .eq("id", user.user.id)
        .select()
        .single();
    if (error) {
        return { data: null, error: "Failed to update profile" };
    }

    revalidatePath("/profile");

    const res: UserWithProfile = { user: user.user, profile: profile }
    return { data: res };
}