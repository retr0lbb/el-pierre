import { uuid, pgTable, text, decimal, serial } from "drizzle-orm/pg-core";
import { category } from "./category";

export const products = pgTable("products", {
	id: uuid().primaryKey().defaultRandom(),
	name: text().notNull(),
	categoryId: serial()
		.references(() => category.id)
		.notNull(),
	description: text(),
	base_price: decimal().notNull(),
});
