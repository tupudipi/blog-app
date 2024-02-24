import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const fullUrl = `${req.headers['x-forwarded-proto']}://${req.headers.host}${req.url}`;
    const { searchParams } = new URL(fullUrl);
    const postSlug = searchParams.get('postSlug');

    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug }),
            },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(comments), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

export const POST = async (req) => {
    const session = await getAuthSession();
    if (!session) {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    try {
        const body = await req.json();

        // Validate input
        if (!body.desc) {
            return new NextResponse(JSON.stringify({ error: 'Content is required' }), { status: 400 });
        }

        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email },
        });
        return new NextResponse(JSON.stringify(comment), { status: 201 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}