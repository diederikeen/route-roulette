import { useRouter } from "@tanstack/react-router";
import { Input } from "src/components/input/input";

import { supabase } from "src/lib/supabase.client";

import { useState } from "react";
import { Button } from "src/components/button/button";

// TODO: Create password confirm functionality
// TODO: Create regex for strong password

export function SignUpFeature() {
  const router = useRouter();
  const [email, setEmail] = useState<undefined | string>();
  const [password, setPassword] = useState<undefined | string>();
  const [error, setError] = useState<undefined | string>();

  async function signUpNewUser() {
    if (!email || !password) return;

    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signupError) {
      setError(signupError.message);
      return;
    }

    // TODO: Do error handling
    if (data) {
      if (error) {
        setError(undefined);
      }

      router.navigate({
        to: "/confirm-email",
        search: { email: data.user?.email || "" },
      });
    }
  }

  return (
    <div className="flex flex-col gap-3 mb-9">
      <h2 className="mb-2 text-2xl text-gray-200">Sign up</h2>
      <Input
        onChange={(e) => setEmail(e.currentTarget.value)}
        name="email"
        type="email"
        label="Email"
      />
      <Input
        onChange={(e) => setPassword(e.currentTarget.value)}
        name="password"
        type="password"
        label="Password"
      />

      {error && <p>{error}</p>}
      <Button onClick={signUpNewUser} classNames="self-start">
        sign up
      </Button>
    </div>
  );
}
