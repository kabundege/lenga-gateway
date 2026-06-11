"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ExpandedPanelContent } from "@/components/ExpandedPanelContent";
import {
  COLLAPSED_PANEL_WIDTH,
  PANEL_TRANSITION_MS,
  TRADER_TOPICS,
  type TraderTopic,
} from "@/constants/traderTopics";

type PanelLayout = "accordion" | "mobile-featured" | "mobile-thumbnail";

type AccordionPanelProps = {
  topic: TraderTopic;
  isActive: boolean;
  index: number;
  onSelect: () => void;
  layout?: PanelLayout;
};

function AccordionPanel({
  topic,
  isActive,
  index,
  onSelect,
  layout = "accordion",
}: AccordionPanelProps) {
  const [showCollapsedLabel, setShowCollapsedLabel] = useState(!isActive);

  useEffect(() => {
    if (isActive) {
      setShowCollapsedLabel(false);
      return;
    }

    const timer = window.setTimeout(
      () => setShowCollapsedLabel(true),
      PANEL_TRANSITION_MS,
    );
    return () => window.clearTimeout(timer);
  }, [isActive]);

  const isMobileFeatured = layout === "mobile-featured";
  const isMobileThumbnail = layout === "mobile-thumbnail";
  const isCollapsed = !isActive || isMobileThumbnail;

  return (
    <button
      type="button"
      aria-expanded={isActive && !isMobileThumbnail}
      aria-label={topic.title}
      onClick={onSelect}
      style={
        isCollapsed
          ? { flex: `0 0 ${COLLAPSED_PANEL_WIDTH}`, width: COLLAPSED_PANEL_WIDTH }
          : undefined
      }
      className={`relative min-w-0 cursor-pointer overflow-hidden rounded-2xl transition-[flex-grow,flex-basis,width,box-shadow] duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
        isMobileFeatured
          ? "h-[min(280px,40vh)] w-full shrink-0"
          : isMobileThumbnail
            ? "h-full shrink-0 group hover:shadow-lg hover:shadow-black/20"
            : isActive
              ? "flex-1"
              : "group shrink-0 hover:shadow-lg hover:shadow-black/20"
      }`}
    >
      <Image
        src={topic.image}
        alt={topic.alt}
        fill
        sizes="(max-width: 768px) 80vw, 40vw"
        className={`object-cover object-center transition-transform duration-500 ease-out ${
          isCollapsed ? "group-hover:scale-110" : ""
        }`}
        priority={index === 0}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-opacity duration-300 ${
          isCollapsed ? "group-hover:opacity-80" : ""
        }`}
      />

      {isCollapsed && (
        <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
      )}

      <ExpandedPanelContent
        isActive={isActive && !isMobileThumbnail}
        title={topic.title}
        description={topic.description}
      />

      <div
        aria-hidden={!showCollapsedLabel || !isCollapsed}
        className={`absolute inset-x-0 bottom-0 bg-black/55 py-4 transition-[opacity,background-color] duration-300 ${
          showCollapsedLabel && isCollapsed ? "opacity-100" : "opacity-0"
        } ${isCollapsed ? "group-hover:bg-black/70" : ""}`}
      >
        <span
          className={`mx-auto block w-max whitespace-nowrap text-sm font-semibold tracking-wide text-white [writing-mode:vertical-rl] rotate-180 transition-transform duration-300 ${
            isCollapsed ? "group-hover:scale-105" : ""
          }`}
        >
          {topic.title}
        </span>
      </div>
    </button>
  );
}

export function TraderAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTopic = TRADER_TOPICS[activeIndex];

  return (
    <>
      <div className="flex flex-col gap-2 sm:hidden">
        <AccordionPanel
          key={`featured-${activeTopic.title}`}
          topic={activeTopic}
          index={activeIndex}
          isActive
          layout="mobile-featured"
          onSelect={() => setActiveIndex(activeIndex)}
        />

        <div className="flex h-24 gap-2 overflow-x-auto pb-1">
          {TRADER_TOPICS.map((topic, index) =>
            index === activeIndex ? null : (
              <AccordionPanel
                key={topic.title}
                topic={topic}
                index={index}
                isActive={false}
                layout="mobile-thumbnail"
                onSelect={() => setActiveIndex(index)}
              />
            ),
          )}
        </div>
      </div>

      <div className="hidden h-[min(420px,50vh)] w-full min-w-0 gap-2 sm:flex sm:gap-3">
        {TRADER_TOPICS.map((topic, index) => (
          <AccordionPanel
            key={topic.title}
            topic={topic}
            index={index}
            isActive={activeIndex === index}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </>
  );
}
