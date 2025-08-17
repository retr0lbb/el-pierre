import { prisma } from "../../../lib/prisma";
import type { LoginData } from "../routes/dto/register.dto";

export async function registerUser(data: LoginData) {
	const doesUserExists = await prisma.userAccount.findUnique({
		where: {
			email: data.email,
		},
	});

	if (doesUserExists) {
		throw new Error("User with this email already exists");
	}

	await prisma.userAccount.create({
		data: {
			email: data.email,
			fullName: data.fullName,
			password: data.password,
			isEmailVerified: false,
		},
	});
}
