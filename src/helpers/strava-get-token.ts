import { supabase } from "src/lib/supabase.client";
import { refreshStravaToken } from "./strava-refresh-token";

export async function getValidStravaToken(userId: string) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("access_token, refresh_token, expires_at")
    .eq("id", userId)
    .single();

  if (!profile) throw new Error("User not found");

  const now = new Date();
  const expiresAt = new Date(profile.expires_at! * 1000);

  if (expiresAt <= now) {
    return await refreshStravaToken(userId, profile.refresh_token!);
  }

  return profile.access_token;
}
