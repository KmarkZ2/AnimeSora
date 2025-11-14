import { createWebClient } from "./supabase";

export async function insertNews(data: { title: string, content: string, image: string }) {
    const supabase = createWebClient();


    const { data: result, error } = await supabase.from("news").insert({
        title: data.title,
        content: data.content,
        image: data.image,
    });

    if (error) {
        console.error("Insert error:", error);
        throw error;
    }

    return result;

}

export async function getNews() {
    const supabase = createWebClient();

    const { data, error } = await supabase
        .from("news")
        .select("*")
        .limit(10);

    if (error) {
        console.error("Fetch error:", error);
        throw error;
    }

    return data;
}