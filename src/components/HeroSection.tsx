import Image from "next/image";
import Link from "next/link";

import { TraderTopicsSection } from "@/components/TraderTopicsSection";
import {
  ANALYTICS_URL,
  CONTENT_URL,
  PARTNER_LOGOS,
  UNCDF_LOGO,
} from "@/constants/heroSection";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#f5f5f5]">
      <header className="mx-auto flex w-full container items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <h1 className="text-lg font-bold tracking-tight md:text-3xl">Lenga</h1>
        <Image alt="UNCDF" width={60} height={60} src={UNCDF_LOGO} />
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-8 pt-2 text-center md:px-10 md:pb-10 md:pt-4">
        <div className="shrink-0">
          <h1 className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Helping learners grow,{" "}
            <span className="text-purple-400">together</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:mt-5 md:text-lg">
            Lenga brings lessons, quizzes, and progress reports into one place
            so your team can teach with confidence and see how learners are
            doing.
          </p>
        </div>

        <div className="mt-6 flex w-full shrink-0 max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:mt-8">
          <Link
            href={ANALYTICS_URL}
            className="inline-flex items-center justify-center text-purple-200 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            User analytics
          </Link>
          <Link
            href={CONTENT_URL}
            className="inline-flex items-center justify-center rounded-full border border-border bg-purple-100 px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-neutral-50"
          >
            Content Management
          </Link>
        </div>
      </div>

      <TraderTopicsSection />

      <div className="container mx-auto flex w-full py-5 transform items-center justify-between gap-5">
        {PARTNER_LOGOS.map((logo) => (
          <Image
            width={100}
            height={100}
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  );
}
