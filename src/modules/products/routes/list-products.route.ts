import type { FastifyInstance } from "fastify";
import { listProductsHandler } from "../handlers/list-products";

export async function ListProductsRoute(app: FastifyInstance) {
	app.get("/products", async (_, reply) => {
		try {
			const data = await listProductsHandler();
			reply.status(200).send({ data });
		} catch (error) {
			console.log(error);
			throw error;
		}
	});
}
