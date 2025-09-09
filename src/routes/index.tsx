import { createFileRoute } from "@tanstack/react-router";
import { SignInFeature } from "src/features/sign-in/sign-in";
import { SignUpFeature } from "src/features/sign-up/sign-up";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <div>
        <SignUpFeature />
        <SignInFeature />
      </div>
    </main>
  );
}
