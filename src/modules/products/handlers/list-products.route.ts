import { db } from "../../../db/connection";
import { schemas } from "../../../db/schema";

export async function listProductsHandler() {
	await db.select({
		id: schemas.products,
	});
}
