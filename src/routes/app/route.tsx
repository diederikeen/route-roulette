import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { AuthProvider } from "src/providers/auth-provider";
import { ProfileProvider } from "src/providers/profile-provider";
import { HomeOutlined, HeatMapOutlined, BookOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { Nav } from "src/components/nav/nav";

export const Route = createFileRoute("/app")({
  component: DashboardComponent,
});

function DashboardComponent() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <div className="h-dvh bg-gray-100 flex">
          <Nav />
          <main className="pl-12 py-3 w-full h-full">
            <Outlet />
          </main>
        </div>
      </ProfileProvider>
    </AuthProvider>
  );
}
