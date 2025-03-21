"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center space-y-6">
        <div className="relative">
          <div className="text-[150px] font-bold leading-none text-muted-foreground/20 sm:text-[200px]">
            404
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold sm:text-5xl">
            Oops!
          </div>
        </div>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Page not found
        </h1>

        <p className="text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved, deleted, or perhaps never existed.
        </p>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="default">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="../">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
