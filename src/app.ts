import cors from "@fastify/cors";
import fastify from "fastify";
import { productsModule } from "./modules/products";
import { authModule } from "./modules/auth";

const app = fastify();

app.register(cors, {
	origin: true,
});

app.register(productsModule);
app.register(authModule);

export { app as App };
