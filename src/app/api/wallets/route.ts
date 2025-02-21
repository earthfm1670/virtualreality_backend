import { NextRequest, NextResponse } from "next/server";
import { getWallets, createWallet } from "@/controllers/walletController";

export async function GET(req: NextRequest) {
  try {
    const wallets = await getWallets();
    return NextResponse.json(wallets);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newWallet = await createWallet(body);
    return NextResponse.json(newWallet, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
