import { TraderAccordion } from "@/components/TraderAccordion";

type TraderTopicsSectionProps = {
  headingLines?: readonly string[];
  description?: string;
  className?: string;
};

const DEFAULT_HEADING_LINES = ["Learn.", "Save.", "Grow."] as const;

const DEFAULT_DESCRIPTION =
  "Practical financial skills that help market traders plan smarter, save steadily, and elevate their businesses.";

const HEADING_LINE_COLORS = [
  "text-purple-900",
  "text-purple-700",
  "text-purple-500",
] as const;

export function TraderTopicsSection({
  headingLines = DEFAULT_HEADING_LINES,
  description = DEFAULT_DESCRIPTION,
  className = "",
}: TraderTopicsSectionProps) {
  return (
    <div
      className={`w-full h-full px-6 pb-6 bg-purple-100 md:px-10 ${className}`.trim()}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="shrink-0 lg:max-w-xs">
          <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {headingLines.map((line, index) => (
              <span
                key={line}
                className={
                  HEADING_LINE_COLORS[index] ??
                  HEADING_LINE_COLORS[HEADING_LINE_COLORS.length - 1]
                }
              >
                {line}
                {index < headingLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <TraderAccordion />
        </div>
      </div>
    </div>
  );
}
