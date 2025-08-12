import z from "zod/v4";

export const createProductBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	basePrice: z.float64().positive(),
	categoryId: z.int().positive(),
});
