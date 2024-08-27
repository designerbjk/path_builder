import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-16 border-t bg-background md:h-24">
      <div className="container flex h-full flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://twitter.com/shadcn"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn
            </a>
            .
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="/changelog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Changelog
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="/refund"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Refund
          </Link>
        </nav>
      </div>
    </footer>
  );
}
