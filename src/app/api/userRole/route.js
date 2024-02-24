import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

  if (!email) {
    return new NextResponse(JSON.stringify({ error: 'Email is required' }), { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: {
      role: true
    }
  });

  if (!user) {
    return new NextResponse(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  return new NextResponse(JSON.stringify({ role: user.role }), { status: 200 });
}