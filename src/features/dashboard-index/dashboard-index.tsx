import { useQuery } from "@tanstack/react-query";
import { getStravaActivities } from "src/helpers/strava-get-activities";
import { useProfile } from "src/providers/profile-provider";

export function DashboardIndex() {
  const { profile } = useProfile();

  const { data, error } = useQuery({
    queryKey: ["strava-activities"],
    queryFn: async () => await getStravaActivities(profile?.id!),
  });

  return (
    <div className="">
      {!profile?.strava_id && (
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
