import { describe, expect, it } from "vitest";
import { listProductsHandler } from "./list-products";

describe("LIST PRODUCTS UNIT TEST", () => {
	it("Should return an array of products", async () => {
		const data = await listProductsHandler();

		expect(data).toEqual([]);
	});
});
