import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(): Promise<NextResponse> {
	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	await delay(3000);

	const filePath = path.join(process.cwd(), "src/data/response_bookings.json");
	const jsonData = fs.readFileSync(filePath, "utf-8");
	const bookings = JSON.parse(jsonData);

	return NextResponse.json(bookings);
}
