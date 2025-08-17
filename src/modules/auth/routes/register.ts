import type { FastifyInstance } from "fastify";
import { loginBodySchema } from "./dto/register.dto";
import { registerUser } from "../handlers/register";

export function RegisterUserRoute(app: FastifyInstance) {
	app.post("/auth/register", async (request, reply) => {
		const { email, fullName, password } = loginBodySchema.parse(request.body);

		try {
			await registerUser({ email, fullName, password });

			reply.status(201).send();
		} catch (error) {
			console.log(error);
			throw error;
		}
	});
}
