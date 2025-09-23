import { createFileRoute } from "@tanstack/react-router";
import { SignInFeature } from "src/features/sign-in/sign-in";
import { SignUpFeature } from "src/features/sign-up/sign-up";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bg-gray-900 h-dvh flex flex-row">
      <div className="px-6 py-7 text-gray-200 w-full">
        <h1 className="text-5xl">Create new routes with ease.</h1>
      </div>
      <div className="w-1/2 max-w-[560px] bg-gray-800 px-6 py-7">
        <SignInFeature />
        <div className="flex flex-row items-center mb-3">
          <hr className="bg-gray-600 w-full h-[1px] border-none" />
          <p className="text-center px-5 text-white w-auto uppercase text-xs">
            or
          </p>
          <hr className="bg-gray-600 w-full h-[1px] border-none" />
        </div>
        <SignUpFeature />
      </div>
    </main>
  );
}
