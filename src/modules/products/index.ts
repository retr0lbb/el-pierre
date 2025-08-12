import type { FastifyInstance } from "fastify";
import { listProductsRoute } from "./routes/list-products.route";

export const productsModule = async (app: FastifyInstance) => {
	app.register(listProductsRoute);
};
