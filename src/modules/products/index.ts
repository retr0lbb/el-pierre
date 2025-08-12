import type { FastifyInstance } from "fastify";
import { listProductsRoute } from "./routes/list-products.route";
import { createProductRoute } from "./routes/create-product.route";

export const productsModule = async (app: FastifyInstance) => {
	app.register(listProductsRoute);
	app.register(createProductRoute);
};
