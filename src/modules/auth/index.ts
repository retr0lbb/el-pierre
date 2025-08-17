import type { FastifyInstance } from "fastify";
import { RegisterUserRoute } from "./routes/register";

export const authModule = async (app: FastifyInstance) => {
	app.register(RegisterUserRoute);
};
