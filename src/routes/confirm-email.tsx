import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/confirm-email")({
  component: RouteComponent,
  validateSearch: (search) => ({
    email: z.string().email().parse(search.email),
  }),
});

function RouteComponent() {
  const props = Route.useMatch();

  return (
    <div className="bg-gray-900 w-full h-dvh flex items-center justify-center">
      <p className="text-gray-200 text-lg">
        An confirmation has been sent too: {props.search.email}
      </p>
    </div>
  );
}
