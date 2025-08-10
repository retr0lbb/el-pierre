import type { FastifyInstance } from "fastify";
import { db } from "../../../db/connection";

export async function ListProductsRoute(app: FastifyInstance) {
	app.get("/products", async (request, reply) => {
		try {
		} catch (error) {}
	});
}
