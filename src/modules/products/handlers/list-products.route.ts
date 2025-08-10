import { prisma } from "../../../lib/prisma";

export async function listProductsHandler() {
	const data = await prisma;

	return data;
}
