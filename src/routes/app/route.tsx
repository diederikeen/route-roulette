import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AuthProvider } from "src/providers/auth-provider";
import { ProfileProvider } from "src/providers/profile-provider";

export const Route = createFileRoute("/app")({
  component: DashboardComponent,
});

function DashboardComponent() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <div className="w-full h-dvh bg-gray-900 text-gray-200">
          <h1>hi</h1>
          <Outlet />
        </div>
      </ProfileProvider>
    </AuthProvider>
  );
}
