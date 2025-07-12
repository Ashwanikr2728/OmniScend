import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import logo from "@/public/logo.jpg";
import { IconMessageChatbot } from "@tabler/icons-react";
import { Send } from "lucide-react";
import Image from "next/image";

export default function ChatBot() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden mt-10">
      {/* ✅ Proper Full Page Background Gradient (Light Mode) */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-indigo-400 via-blue-300 to-white
 dark:hidden"
      />
      {/* Dark Mode Background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 hidden dark:block bg-gradient-to-b from-slate-900 via-indigo-950 to-black"
      />
      <>
        <div className="mt-10 container mx-auto">
          <Card className="h-[650px] relative rounded-4xl border-0 bg-gradient-to-b from-green-200 
            dark:from-indigo-950 dark:to-slate-900 dark:border dark:border-indigo-500/20 dark:shadow-lg dark:shadow-indigo-500/10">
            <CardHeader>
              <CardTitle className="font-bold text-4xl text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-400 dark:to-cyan-400">
                Welcome to Omni Ai
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-muted-foreground h-[450px] flex flex-col gap-y-5 items-center justify-center dark:text-indigo-200">
              <span className="relative group transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 dark:block hidden"></div>
                <Image
                  src={logo}
                  alt="Ai logo"
                  width={100}
                  height={100}
                  className="rounded-full dark:border-2 dark:border-indigo-600 dark:shadow-md relative"
                />
              </span>
              <h2 className="dark:bg-slate-800/30 dark:px-4 dark:py-2 dark:rounded-full dark:border dark:border-indigo-500/20"> Ask me your all doubts related to your lessons</h2>
            </CardDescription>
            <CardContent className="absolute bottom-0 flex items-center space-x-3 w-full mb-10 px-8">
              <IconMessageChatbot className="size-10 dark:text-indigo-400 dark:animate-pulse" />
              <Input
                className="border-cyan-400 dark:border-indigo-500 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-indigo-300/50 dark:focus-visible:ring-indigo-500/50"
                type="text"
                placeholder="Always here for you..."
              />
              <Button className="dark:bg-gradient-to-r dark:from-indigo-600 dark:to-cyan-600 dark:hover:from-indigo-500 dark:hover:to-cyan-500 dark:transition-all dark:duration-300">
                <Send className="dark:text-white" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </>
    </div>
  );
}
