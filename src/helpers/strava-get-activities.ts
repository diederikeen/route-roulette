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

  return res.json();
}
