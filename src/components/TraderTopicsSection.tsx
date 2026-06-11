import { TraderAccordion } from "@/components/TraderAccordion";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_HEADING_LINES,
  HEADING_LINE_COLORS,
} from "@/constants/traderTopics";

type TraderTopicsSectionProps = {
  headingLines?: readonly string[];
  description?: string;
  className?: string;
};

export function TraderTopicsSection({
  headingLines = DEFAULT_HEADING_LINES,
  description = DEFAULT_DESCRIPTION,
  className = "",
}: TraderTopicsSectionProps) {
  return (
    <div
      className={`w-full h-full items-center justify-center flex flex-1 px-6 py-10 bg-purple-100 md:px-10 ${className}`.trim()}
    >
      <div className="mx-auto flex flex-grow w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
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
