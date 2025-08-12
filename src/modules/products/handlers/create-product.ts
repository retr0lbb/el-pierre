import { prisma } from "../../../lib/prisma";

export async function createProductHandler(data: {
	basePrice: number;
	categoryId: number;
	description: string;
	name: string;
}) {
	const category = await prisma.category.findUnique({
		where: {
			id: data.categoryId,
		},
	});

	if (!category) {
		throw new Error("Category doesn't Exists");
	}

	return await prisma.product.create({
		data: {
			basePrice: data.basePrice,
			description: data.description,
			name: data.name,
			categoryId: data.categoryId,
		},
	});
}
