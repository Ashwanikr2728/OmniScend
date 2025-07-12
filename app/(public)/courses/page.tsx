import { getAllCourses } from "@/app/data/course/get-all-courses";
import {
  PublicCourseCard,
  PublicCourseCardSkeleton,
} from "../_components/PublicCourseCard";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function PublicCoursesroute() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden mt-10">
      {/* ✅ Proper Full Page Background Gradient (Light Mode) */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-indigo-300 via-blue-300 to-white
 dark:hidden"
      />
      <div className="mt-14">
        <div className="flex flex-col space-y-2 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Explore Courses
          </h1>
          <p className="text-muted-foreground">
            Discover our wide range of courses designed to help you achieve your
            learning goals.
          </p>
        </div>
        <Suspense fallback={<LoadingSkeletonLayout />}>
          <RenderCourses />
        </Suspense>
      </div>
    </div>
  );
}

async function RenderCourses() {
  const courses = await getAllCourses();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <PublicCourseCard key={course.id} data={course} />
      ))}
    </div>
  );
}

function LoadingSkeletonLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <PublicCourseCardSkeleton key={index} />
      ))}
    </div>
  );
}
