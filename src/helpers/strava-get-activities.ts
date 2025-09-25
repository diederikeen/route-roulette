import { StravaActivitySchema } from "src/schemas";
import { getValidStravaToken } from "./strava-get-token";

export async function getStravaActivities(userId: string) {
  const token = await getValidStravaToken(userId);

  const res = await fetch("https://www.strava.com/api/v3/athlete/activities", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Strava API error: ${res.statusText}`);
  }

  const data = await res.json();

  return StravaActivitySchema.safeParse(data);
}
