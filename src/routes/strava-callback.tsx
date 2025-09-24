import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "src/lib/supabase.client";
import { useAuth } from "src/providers/auth-provider";
import { StravaInitalCall } from "src/schemas";
import z from "zod";

export const Route = createFileRoute("/strava-callback")({
  component: RouteComponent,
  validateSearch: z.object({
    code: z.string(),
    state: z.string().optional(),
    scope: z.string(),
  }),
});

async function getStravaCode(code: string) {
  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: import.meta.env.VITE_STRAVA_CLIENT_ID,
      client_secret: import.meta.env.VITE_STRAVA_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
    }),
  });

  const data = await response.json();
  return StravaInitalCall.safeParse(data);
}

function RouteComponent() {
  const { code } = Route.useSearch();
  const { user } = useAuth();

  const {
    data,
    isLoading,
    error: fetchError,
  } = useQuery({
    queryKey: ["strava_code"],
    queryFn: async () => await getStravaCode(code),
  });

  useEffect(() => {
    async function updateDatabase() {
      supabase.from("profiles").update({
        id: user?.id!,
        strava_id: data?.data?.athlete.id,
        access_token: data?.data?.access_token,
        strava_photo: data?.data?.athlete.profile_medium,
        strava_country: data?.data?.athlete.country,
        expires_at: data?.data?.expires_at,
        refresh_token: data?.data?.refresh_token,
      });
    }

    if (!isLoading && !fetchError && user !== null) {
      updateDatabase();
    }
  }, [data, isLoading, user]);

  return (
    <div className="h-dvh w-full bg-slate-900 text-white flex justify-center items-center">
      {isLoading && <h1>Connecting strava...</h1>}
      {(fetchError || Boolean(data?.error)) && (
        <h1>Something went wrong, please try again later</h1>
      )}
    </div>
  );
}
