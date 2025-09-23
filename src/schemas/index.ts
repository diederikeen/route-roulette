import z from "zod";

export const StravaAthlete = z.object({
  firstname: z.string(),
  lastname: z.string(),
  country: z.string(),
  profile_medium: z.string(),
  premium: z.boolean(),
  id: z.number(),
});

export const StravaInitalCall = z.object({
  expires_at: z.number(),
  expires_in: z.number(),
  refresh_token: z.string(),
  access_token: z.string(),
  athlete: StravaAthlete,
});
