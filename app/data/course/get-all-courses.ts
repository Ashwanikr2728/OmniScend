
import { prisma } from "@/lib/db";

export async function getAllCourses() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = await prisma.course.findMany({
    where: {
      status: "Published",
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      title: true,
      price: true,
      fileKey: true,
      smallDescription: true,
      slug: true,
      id: true,
      level: true,
      duration: true,
      category: true,
    },
  });
  return data;
}

export type PublicCourseType = Awaited<ReturnType<typeof getAllCourses>>[0];
