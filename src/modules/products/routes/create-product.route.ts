import type { FastifyInstance } from "fastify";
import { createProductBodySchema } from "../dto/create-product-DTO";
import { createProductHandler } from "../handlers/create-product";

export async function createProductRoute(app: FastifyInstance) {
	app.post("/products", async (request, reply) => {
		const { basePrice, categoryId, description, name } =
			createProductBodySchema.parse(request.body);

		try {
			const data = await createProductHandler({
				basePrice,
				categoryId,
				description,
				name,
			});

			return reply.status(201).send({ product: data });
		} catch (error) {
			console.log(error);
			throw error;
		}
	});
}
