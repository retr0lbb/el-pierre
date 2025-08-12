import { prisma } from "../../../lib/prisma";

export async function listProductsHandler() {
	const products = await prisma.product.findMany();

	return products;
}
