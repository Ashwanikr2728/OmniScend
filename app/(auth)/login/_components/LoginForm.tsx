"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Github, GithubIcon, Loader, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useTransition, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [githubPending, startGithubTransition] = useTransition();
  const [emailPending, startEmailTransition] = useTransition();
  const [email, setEmail] = useState("");

  async function signInWithGithub() {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success(
              "Successfully logged in with Github, you will be redirected..."
            );
          },
          onError: (error) => {
            toast.error("Internal Server error");
          },
        },
      });
    });
  }

  function signInWithEmail() {
    startEmailTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email sent");
            router.push(`/verify-request?email=${email}`);
          },
          onError: () => {
            toast.error("Error sending email");
          },
        },
      });
    });
  }

  return (
    <div className="relative w-full overflow-x-hidden mt-10">
      {/* ✅ Proper Full Page Background Gradient (Light Mode) */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-indigo-400 via-blue-300 to-white
 dark:hidden"
      />
      <>
        <Card className="dark:bg-gradient-to-b dark:from-gray-900 dark:border-none0">
          <CardHeader>
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>
              Login with your Github or Email Account
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button
              disabled={githubPending}
              onClick={signInWithGithub}
              variant="outline"
              className="w-full border-b-gray-600"
            >
              {githubPending ? (
                <>
                  <Loader className="size-4 animate-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <GithubIcon className="size-4" />
                  Sign in with Github
                </>
              )}
            </Button>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-card px-2 text-muted-foreground rounded-2xl">
                Or continue with
              </span>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={email}
                  className="border-neutral-500"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="M@example.com"
                  required
                />
              </div>
              <Button onClick={signInWithEmail}  disabled={emailPending}>
                {emailPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    <span>Continue with Email</span>
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </>
    </div>
  );
}
