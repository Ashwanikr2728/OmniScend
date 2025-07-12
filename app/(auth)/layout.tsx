import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/logo.jpg";


export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
  <div className="relative flex min-h-svh flex-col items-center justify-center">
    <Link href="/" className={buttonVariants({
        variant: "outline",
        className: "absolute left-4 top-4",
    })}>
    <ArrowLeft className="size-4" />
    Back
    </Link>

    <div className="flex w-full max-w-sm flex-col gap-6">
        
        <Link className="flex items-center gap-2 self-center font-medium" href="/">
        <Image src={logo} alt="Logo" width={35} height={35} className="rounded-full" />
        <span className="text-xl">Omniscend</span>
        </Link>
        {children}
        <div className="text-balance text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our <span className="hover:text-primary hover:underline cursor-pointer">Terms of service</span>{" "}
            and <span className="hover:text-primary hover:underline cursor-pointer">Privacy Policy</span>.
        </div>
        </div>
  </div>
  )
}