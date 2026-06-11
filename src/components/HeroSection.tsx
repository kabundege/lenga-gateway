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

const uncdfLogo = "/logos/uncdf_logo.png";
const euLogo = "/logos/eu_logo.png";
const govLogo = "/logos/gov_logo.png";
const iomLogo = "/logos/iom_logo.png";
const unctadLogo = "/logos/unctad_logo.png";
const sdgFundLogo = "/logos/sdg_fund_logo.webp";
const tradeCenterLogo = "/logos/trade_center_logo.png";

const partnersLogos = [
  { src: euLogo, alt: "EU" },
  { src: govLogo, alt: "Gov" },
  { src: iomLogo, alt: "IOC" },
  { src: unctadLogo, alt: "UNCTAD" },
  { src: sdgFundLogo, alt: "SDG Fund" },
  { src: tradeCenterLogo, alt: "Trade Center" },
];

const ANALYTICS_URL = "https://analytics.lenga.site";
const CONTENT_URL = "https://api.lenga.site";

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-hidden bg-[#f5f5f5]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <h1 className="text-lg font-bold tracking-tight md:text-3xl">Lenga</h1>
        <Image alt="UNCDF" width={60} height={60} src={uncdfLogo} />
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
            User analytics
          </Link>
          <Link
            href={CONTENT_URL}
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-neutral-50"
          >
            Content Management
          </Link>
        </div>
      </div>

      <div className="bg-gray-200 h-full w-full">
        <div className="container mx-auto bg-red-500 h-full w-full"></div>
      </div>

      <div className="container mx-auto flex w-full py-5 transform items-center justify-between gap-5">
        {partnersLogos.map((logo) => (
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
