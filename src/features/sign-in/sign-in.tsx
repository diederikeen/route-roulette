import { useRouter } from "@tanstack/react-router";
import { useState } from "react";

import { Input } from "src/components/input/input";
import { supabase } from "src/lib/supabase.client";

import styles from "./sign-in.module.css";
import { Button } from "src/components/button/button";
import { ACCOUNT_STATUS } from "src/types";

export function SignInFeature() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const hasError = error?.status;
    const hasConfirmedEmail = data.user?.aud === ACCOUNT_STATUS.AUTHENTICATED;

    if (hasError) {
      setError(error.message);

      return;
    }

    if (!hasConfirmedEmail) {
      setError("Please confirm your email first");

      return;
    }

    router.navigate({
      to: "/dashboard",
    });
  }

  return (
    <div className={styles.wrapper}>
      <h3>Or sign in</h3>
      <Input
        label="Email"
        name="email"
        type="email"
        required
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        required
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button type="button" onClick={signInWithEmail}>
        Sign In
      </Button>
    </div>
  );
}
