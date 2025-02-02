import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Product, ProductsResponse } from "@utils/models/product";

export async function GET(request: Request): Promise<NextResponse> {
	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	await delay(3000);

	const filePath = path.join(process.cwd(), "src/data/response_products.json");
	const jsonData = fs.readFileSync(filePath, "utf-8");
	const products: ProductsResponse = JSON.parse(jsonData);

	const urlParts = request.url.split("/");
	const id = urlParts[urlParts.length - 1];

	if (id) {
		const product = products.data.find((item: Product) => item.id === id);
		if (product) {
			return NextResponse.json(product);
		} else {
			return NextResponse.json({ error: "Product not found" }, { status: 404 });
		}
	}

	return NextResponse.json(products);
}
