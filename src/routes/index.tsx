import { createFileRoute } from "@tanstack/react-router";
import { SignInFeature } from "src/features/sign-in/sign-in";
import { SignUpFeature } from "src/features/sign-up/sign-up";
import { Card } from "src/components/card/card";

import styles from "./index.module.css";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <Card>
          <SignUpFeature />
          <SignInFeature />
        </Card>
      </div>
    </main>
  );
}
