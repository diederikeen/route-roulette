import z from "zod";

export const StravaAthleteSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  country: z.string(),
  profile_medium: z.string(),
  premium: z.boolean(),
  id: z.number(),
});

export const StravaInitalCallSchema = z.object({
  expires_at: z.number(),
  expires_in: z.number(),
  refresh_token: z.string(),
  access_token: z.string(),
  athlete: StravaAthleteSchema,
});

export const StravaActivitySchema = z.array(
  z.object({
    name: z.string(),
    distance: z.number(),
    moving_time: z.number(),
    elapsed_time: z.number(),
    total_elevation_gain: z.number(),
    type: z.string(),
    sport_type: z.string(),
    id: z.number(),
    start_date: z.string(),
    start_date_local: z.string(),
    map: z.object({
      id: z.string(),
      summary_polyline: z.string(),
    }),
    has_heartrate: z.boolean(),
    max_heartrate: z.number(),
    average_heartrate: z.number(),
    upload_id: z.number(),
  }),
);
