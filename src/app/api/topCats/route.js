import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        posts: true,
      },
    });

    const categoriesWithViews = categories.map(category => ({
      id: category.id,
      slug: category.slug,
      title: category.title,
      image: category.image,
      totalViews: category.posts.reduce((sum, post) => sum + post.views, 0),
    }));

    const sortedCategories = categoriesWithViews.sort((a, b) => b.totalViews - a.totalViews);

    return new NextResponse(JSON.stringify({ categories: sortedCategories }), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}