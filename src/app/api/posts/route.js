import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const fullUrl = `${req.headers['x-forwarded-proto']}://${req.headers.host}${req.url}`;
  const { searchParams } = new URL(fullUrl);
  const page = searchParams.get('page');
  const cat = searchParams.get('cat');

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: (page - 1) * POST_PER_PAGE,
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {

    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where })
    ]);

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });

  } catch (err) {
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}


export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  // Fetch user from MongoDB
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  // Role check
  if (user.role !== 'admin') {
    return new NextResponse(
      JSON.stringify({ message: "Unauthorized!" }, { status: 403 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};