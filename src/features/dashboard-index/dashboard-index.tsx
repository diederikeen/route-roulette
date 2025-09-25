import { useQuery } from "@tanstack/react-query";
import { getStravaActivities } from "src/helpers/strava-get-activities";
import { useProfile } from "src/providers/profile-provider";

function getCurrentWeek(date: Date) {
  const today = new Date();
  const start = new Date(today);
  const day = today.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday

  const diffToMonday = (day === 0 ? -6 : 1) - day; // adjust if Sunday
  start.setDate(today.getDate() + diffToMonday);
  start.setHours(0, 0, 0, 0);

  // End of week (Sunday)
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return date >= start && date <= end;
}

export function DashboardIndex() {
  const { profile } = useProfile();

  const { data: activities } = useQuery({
    queryKey: ["strava-activities"],
    queryFn: async () => await getStravaActivities(profile?.id!),
  });

  const thisWeeksData = activities?.data?.filter((data) =>
    getCurrentWeek(new Date(data.start_date_local)),
  );

  const thisWeeksKm =
    thisWeeksData?.reduce((acc, act) => acc + act.distance, 0) ?? 0;

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
      <h1 className="text-3xl font-semibold text-slate-900">Your statistics</h1>
      KM: {Math.round(thisWeeksKm / 1000)}
    </div>
  );
}
