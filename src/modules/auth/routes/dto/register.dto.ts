import z from "zod/v4";

export const loginBodySchema = z.object({
	fullName: z.string(),
	email: z.email(),
	password: z.string().min(8).max(128),
});

export type LoginData = z.infer<typeof loginBodySchema>;
