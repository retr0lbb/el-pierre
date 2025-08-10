import cors from "@fastify/cors";
import fastify from "fastify";
import { ListProductsRoute } from "./modules/products/routes/list-products.route";

const app = fastify();

app.register(cors, {
	origin: true,
});

app.register(ListProductsRoute);

export { app as App };
