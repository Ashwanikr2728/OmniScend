"use server";

import { requireAdmin } from "@/app/data/admin/require-admin";
import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { lessonSchema, LessonSchemaType } from "@/lib/zodSchemas";

export async function updateLesson(
  values: LessonSchemaType,
  lessonId: string
): Promise<ApiResponse> {
  await requireAdmin();

  try {
    const result = lessonSchema.safeParse(values);

    if (!result.success) {
      return {
        status: "error",
        message: "Invalid Data",
      };
    }
    await prisma.lesson.update({
  where: { id: lessonId },
  data: {
    title: result.data.name,
    description: result.data.description,
    ...(result.data.thumbnailKey !== undefined && {
      thumbnailKey: result.data.thumbnailKey,
    }),
    ...(result.data.videoKey !== undefined && {
      videoKey: result.data.videoKey,
    }),
  },
});


    return {
      status: "success",
      message: "Course updated succesfully",
    };
  } catch {
    return {
      status: "error",
      message: "Failed to update course",
    };
  }
}
