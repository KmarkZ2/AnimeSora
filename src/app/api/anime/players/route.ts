import { getAnimePlayers } from "@/service/apiAnimeFetch";
import { AnimePlayers, Player } from "@/types/types";
import { SoraResponse } from "../../types";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse<SoraResponse<AnimePlayers>>> {
    const { searchParams } = new URL(req.url);
    const animeIdStr = searchParams.get("anime_id");

    if (!animeIdStr) {
        return NextResponse.json(
            { ok: false, message: "Missing anime_id parameter", data: null },
            { status: 400 } // Bad Request
        );
    }

    const animeId = parseInt(animeIdStr);

    if (isNaN(animeId)) {
        return NextResponse.json(
            { ok: false, message: "Invalid anime_id (must be a number)", data: null },
            { status: 400 }
        );
    }

    const { data, error } = await getAnimePlayers(animeId);

    if (error || !data) {
        return NextResponse.json(
            { ok: false, message: `Failed to get players: ${error}`, data: null },
            { status: 500 }
        );
    }

    return NextResponse.json({ ok: true, data: data }, { status: 200 });
}