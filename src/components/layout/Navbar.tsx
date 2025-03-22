"use client";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const navigator = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "features",
      href: "/feature",
    },
    {
      name: "compare",
      href: "/compare",
    },
    {
      name: "support",
      href: "/support",
    },
    {
      name: "blog",
      href: "/blog",
    },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#e8f2ee]/95 dark:bg-background/95 border-b border-[#5BB5A2]  transition-all backdrop:blur supports-[backdrop-filter]:bg-[#e8f2ee]/90">
      <div className="flex flex-col lg:flex-row items-center justify-between py-6 max-w-[1400px] px-3 overflow-hidden mx-auto">
        <Link
          className="font-[700] text-[24px] md:text-[32px] text-[#5BB5A2] font-cinzel"
          href="/"
        >
          Banquee.
        </Link>

        <div className="flex items-center  md:gap-4">
          {navigator.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className={cn(
                "hover:text-[#5BB5A2]  py-2 px-3 transition-colors font-medium",
                pathname === nav.href
                  ? "text-[#5BB5A2] font-extrabold"
                  : "text-muted-foreground"
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1 md:gap-2 lg-gap-6">
          <Button
            variant="ghost"
            className="text-[#5BB5A2] hover:bg-transparent"
          >
            Login
          </Button>
          <Button className="px-4 py-2 text-white bg-[#5BB5A2] rounded-lg">
            Open Account
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon
              className="
              h-5
              w-5
              scale-0
              rotate-0
              transition-all
              dark:scale-100
              dark:rotate-90"
            />
            <MoonIcon
              className="
              h-5
              w-5
              absolute
              scale-100
              rotate-0
              transition-all
              dark:scale-0
              dark:rotate-0"
            />
          </Button>
        </div>
      </div>
    </nav>
  );
}
