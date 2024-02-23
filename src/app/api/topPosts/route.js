import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const query = {
    take: 4,
    orderBy: {
      views: 'desc',
    },
    include: {
      user: true,
    },
  };

  try {
    const posts = await prisma.post.findMany(query);
    return new NextResponse(JSON.stringify({ posts }), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}