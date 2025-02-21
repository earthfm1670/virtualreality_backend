import { NextRequest, NextResponse } from "next/server";
import {
  getCurrencies,
  createCurrency,
} from "@/controllers/currencyController";

export async function GET(req: NextRequest) {
  try {
    const currencies = await getCurrencies();
    return NextResponse.json(currencies);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newCurrency = await createCurrency(body);
    return NextResponse.json(newCurrency, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
