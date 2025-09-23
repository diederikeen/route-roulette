import { createFileRoute, useRouter } from "@tanstack/react-router";
import { DashboardIndex } from "src/features/dashboard-index/dashboard-index";
import { useAuth } from "src/providers/auth-provider";
import { useProfile } from "src/providers/profile-provider";

export const Route = createFileRoute("/app/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { loading: loadingUser, user } = useAuth();
  const { loading: loadingProfile } = useProfile();
  const router = useRouter();

  if (!loadingUser && !user) {
    router.navigate({
      to: "/",
    });
  }

  return <>{loadingProfile ? <h1>Loading...</h1> : <DashboardIndex />}</>;
}
