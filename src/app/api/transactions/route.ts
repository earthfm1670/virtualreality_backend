import { NextRequest, NextResponse } from "next/server";
import {
  getTransactions,
  createTransaction,
} from "@/controllers/transactionController";

export async function GET(req: NextRequest) {
  try {
    const transactions = await getTransactions();
    return NextResponse.json(transactions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newTransaction = await createTransaction(body);
    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
