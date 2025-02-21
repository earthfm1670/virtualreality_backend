import { NextRequest, NextResponse } from "next/server";
import { getTransfer, createTransfer } from "@/controllers/transferController";

export async function GET(req: NextRequest) {
  try {
    const transfer = await getTransfer();
    return NextResponse.json(transfer);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newTransfer = await createTransfer(body);
    return NextResponse.json(newTransfer, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
