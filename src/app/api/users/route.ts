import { NextRequest, NextResponse } from "next/server";
import { getUsers, createUser } from "@/controllers/userController";

export async function GET(req: NextRequest) {
  try {
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newUser = await createUser(body);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
