import { useEffect } from "react";
import { getStravaActivities } from "src/helpers/strava-get-activities";
import { useProfile } from "src/providers/profile-provider";

export function DashboardIndex() {
  const { profile } = useProfile();

  useEffect(() => {
    async function getData() {
      if (!profile?.id) {
        return;
      }
      const data = await getStravaActivities(profile?.id);
      return data;
    }

    getData();
  }, [profile]);

  return (
    <div className="w-full h-dvh bg-gray-900 text-white">
      {!profile && (
        <a
          href={`https://www.strava.com/oauth/authorize?client_id=${import.meta.env.VITE_STRAVA_CLIENT_ID}&response_type=code&scope=read,activity:read_all&redirect_uri=${import.meta.env.VITE_APP_URL}/strava-callback`}
          className=""
        >
          Conntect Strava
        </a>
      )}
    </div>
  );
}
