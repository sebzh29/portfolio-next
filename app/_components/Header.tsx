import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { NotionIcon } from "./icons/NotionIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">sebastienglippa.com</h1>
        <div className="flex-[1]" />
        <ul className="flex items-center gap-2">
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://github.com/sebzh29"
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://www.linkedin.com/in/sebastien-glippa-dev"
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://shorturl.at/cmq3D"
          >
            <NotionIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
