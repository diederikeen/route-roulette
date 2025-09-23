import { createContext, useContext, useEffect, useState } from "react";
import { Tables } from "src/types/database";
import { useAuth } from "./auth-provider";
import { supabase } from "src/lib/supabase.client";

type Profile = Tables<"profiles"> | null;

const ProfileContext = createContext<{
  profile: Profile;
  loading: boolean;
}>({
  profile: null,
  loading: true,
});

export function ProfileProvider({ children }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    supabase
      .from("profiles")
      .select()
      .eq("id", user.id)
      .single()
      .then(({ data }) => {
        setProfile(data);
      })
      .then(() => setLoading(false));
  }, [user]);

  return (
    <ProfileContext.Provider value={{ profile, loading }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
