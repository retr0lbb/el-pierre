import cors from "@fastify/cors";
import fastify from "fastify";
import { productsModule } from "./modules/products";

const app = fastify();

app.register(cors, {
	origin: true,
});

app.register(productsModule);

export { app as App };
