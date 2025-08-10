import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const category = pgTable("category", {
	id: serial().primaryKey(),
	title: text().notNull().unique(),
});
