import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');

    const POST_PER_PAGE = 2;

    try {

        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany({
                take: POST_PER_PAGE,
                skip: (page - 1) * POST_PER_PAGE,
            }),
            prisma.post.count()
        ]);

        return new NextResponse(JSON.stringify({posts, count}), { status: 200 });

    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}