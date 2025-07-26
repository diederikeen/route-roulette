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
    <div>
      <p>An confirmation has been sent too: {props.search.email}</p>
    </div>
  );
}
