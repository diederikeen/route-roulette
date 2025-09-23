import { supabase } from "src/lib/supabase.client";

export async function refreshStravaToken(userId: string, refreshToken: string) {
  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: import.meta.env.VITE_STRAVA_CLIENT_ID,
      client_secret: import.meta.env.VITE_STRAVA_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();
  const expiration_date = new Date(data.expires_at * 1000);

  supabase
    .from("profiles")
    .update({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: Math.floor(expiration_date.getTime() / 1000),
    })
    .eq("id", userId);

  return data.access_token;
}
