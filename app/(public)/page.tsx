import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FeaturesSectionDemo } from "@/components/aceternity/ui/FeaturesSectionDemo";
import { GridBackgroundEffect } from "@/components/aceternity/ui/GridBackground";
import Blueline from "@/components/aceternity/ui/blueLine";
import { StickyScrollRevealDemo } from "@/components/aceternity/ui/scrollReveal";
import { InfiniteBrandMarquee } from "@/components/aceternity/ui/infiniteMoving";
import Image from "next/image";
import logo from "@/public/logo.jpg";
interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const hoverFeatures: featureProps[] = [
  {
    title: "Comprehensive Courses",
    description:
      "Access a wide range of carefully curated courses designed by industry experts.",
    icon: "📚",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content, quizzes, and assignments to enhance your learning experience.",
    icon: "🎮",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your progress and achievements with detailed analytics and personalized dashboards.",
    icon: "📈",
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
    icon: "👥",
  },
];

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden mt-10">
      {/* ✅ Proper Full Page Background Gradient (Light Mode) */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-indigo-400 via-blue-300 to-white
 dark:hidden"
      />

      {/* ✅ Proper Full Page Background for Dark Mode
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-slate-950 via-black to-black hidden dark:block" /> */}

      <>
        <GridBackgroundEffect />
        <section className="relative w-full min-h-screen  mt-10">
          <div className="flex flex-col items-center text-center space-y-8 relative z-10 md:pt-48 md:pb-24">
            <Badge variant="secondary">The Future Of Online Education</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight relative">
              Elevate your Learning Experience
            </h1>
            <Blueline />
            <p className="max-w-[700px] font-medium text-muted-foreground md:text-xl">
              Discover a new way to learn with our modern, interactive learning
              management system. Access high-quality courses anytime, anywhere.
            </p>

            <div className="flex sm:flex-row gap-4 mt-32 md:mt-8">
              <Link className={buttonVariants({ size: "lg" })} href="/courses">
                Explore Courses
              </Link>
              <Link
                className={buttonVariants({ size: "lg", variant: "outline" })}
                href="/login"
              >
                Sign in
              </Link>
            </div>
          </div>
        
            <div className=" fixed z-40 bottom-10">
              <Link href="/chatBot" className=" gap-y-5 flex flex-col">
                <span>
                  <Image className="rounded-full" src={logo} alt="Myai" width={90} />
                </span>
                <Button className="bg-accent-foreground dark:bg-emerald-900 text-sm font-semibold rounded-3xl">Omni AI</Button>
              </Link>
            </div>
        </section>

        <div className="relative max-w-6xl mx-auto p-6 z-10">
          <div className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
            <HoverEffect items={hoverFeatures} />
          </div>
        </div>

        <InfiniteBrandMarquee />
        <StickyScrollRevealDemo />
        <FeaturesSectionDemo />
      </>
    </div>
  );
}
