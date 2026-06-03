import Image from "next/image";
import Link from "next/link";

const TRADER_IMAGES = [
  { src: "/images/trader-1.png", alt: "Market trader arranging fresh produce" },
  { src: "/images/trader-2.png", alt: "Trader at a busy market stall" },
  { src: "/images/trader-3.png", alt: "Shop owner organizing goods" },
  {
    src: "/images/trader-4.png",
    alt: "Coastal market vendor with fresh catch",
  },
] as const;

const CARD_LAYOUT = [
  {
    rotate: "rotate-x-15 -rotate-y-15 rotate-z-2",
    translate: "translate-y-0 sm:translate-y-0 md:translate-y-0",
    z: "z-10",
  },
  {
    rotate: "-rotate-x-15 -rotate-y-30 -rotate-z-3",
    translate:
      "-translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20",
    z: "z-20",
  },
  {
    rotate: "rotate-x-15 rotate-y-15",
    translate: "-translate-x-3 sm:-translate-x-4 md:-translate-x-5",
    z: "z-10",
  },
  {
    rotate: "-rotate-x-15 rotate-y-20 rotate-z-3",
    translate:
      "-translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20",
    z: "z-20",
  },
] as const;

const ANALYTICS_URL = "https://analytics.lenga.site";
const CONTENT_URL = "https://api.lenga.site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-[#f5f5f5]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <h1 className="text-lg font-bold tracking-tight md:text-xl">Lenga</h1>

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted md:text-sm">
          Learning made simple
        </p>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-6 pb-8 pt-2 text-center md:px-10 md:pb-10 md:pt-4">
        <div className="shrink-0">
          <h1 className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Helping learners grow,{" "}
            <span className="text-neutral-400">together</span>
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
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            System analytics
          </Link>
          <Link
            href={CONTENT_URL}
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-neutral-50"
          >
            Manage lessons &amp; content
          </Link>
        </div>
      </div>

      <div className="relative mt-6 flex w-full transform scale-[1.0] flex-1 items-end justify-center md:mt-8">
        <div className="flex items-end justify-center gap-1.5 pb-4 sm:gap-2 md:gap-3 lg:gap-10">
          {TRADER_IMAGES.map((image, index) => {
            const layout = CARD_LAYOUT[index];

            return (
              <div
                key={image.src}
                className={`relative aspect-[2.4/5] w-[40vw] min-w-[80px] max-w-[200px] shrink-0 transform overflow-hidden rounded-xl border border-white/70 bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:max-w-[240px] sm:rounded-2xl md:max-w-[270px] lg:max-w-[300px] ${layout.rotate} ${layout.translate} ${layout.z}`}
              >
                <Image
                  fill
                  src={image.src}
                  alt={image.alt}
                  priority={index < 2}
                  className="object-cover"
                  sizes="(max-width: 640px) 22vw, (max-width: 1024px) 24vw, 260px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
