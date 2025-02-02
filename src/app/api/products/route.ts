import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ProductsResponse } from "@utils/models/product";

export async function GET(): Promise<NextResponse> {
	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	await delay(3000);

	const filePath = path.join(process.cwd(), "src/data/response_products.json");
	const jsonData = fs.readFileSync(filePath, "utf-8");
	const products: ProductsResponse = JSON.parse(jsonData);

	return NextResponse.json(products);
}
