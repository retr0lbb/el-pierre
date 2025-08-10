import { uuid, pgTable, integer, text } from "drizzle-orm/pg-core";
import { products } from "./products";

export const variant = pgTable("variants", {
	id: uuid().primaryKey().defaultRandom(),
	productId: uuid()
		.references(() => products.id)
		.notNull(),
	qtdStock: integer().default(0),
	size: text(),
});
