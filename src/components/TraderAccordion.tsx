"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ExpandedPanelContent } from "@/components/ExpandedPanelContent";

const TRADER_TOPICS = [
  {
    title: "Budget planning",
    description:
      "Map daily sales and expenses so you know exactly what to reinvest, save, or spend to grow your stall with confidence.",
    image: "/images/trader-1.png",
    alt: "Market trader arranging fresh produce",
  },
  {
    title: "Debit and credit",
    description:
      "Track what customers owe you and what you owe suppliers to protect cash flow and build lasting trust in your market.",
    image: "/images/trader-2.png",
    alt: "Trader at a busy market stall",
  },
  {
    title: "Savings",
    description:
      "Set aside money for slow days, new stock, or emergencies so your business stays resilient through every season.",
    image: "/images/trader-3.png",
    alt: "Shop owner organizing goods",
  },
  {
    title: "Loans",
    description:
      "Understand borrowing and repayment so you can invest in inventory and equipment without putting your livelihood at risk.",
    image: "/images/trader-4.png",
    alt: "Coastal market vendor with fresh catch",
  },
  {
    title: "Saving groups",
    description:
      "Save together with fellow traders, access shared funds when needed, and support each other's growth as a community.",
    image: "/images/trader-1.png",
    alt: "Traders collaborating at a market",
  },
  {
    title: "Mobile banking",
    description:
      "Send, receive, and manage money from your phone to serve customers faster and keep clear records of every transaction.",
    image: "/images/trader-2.png",
    alt: "Trader using a mobile phone at a stall",
  },
] as const;

const PANEL_TRANSITION_MS = 500;
const COLLAPSED_PANEL_WIDTH = "4rem";

type AccordionPanelProps = {
  topic: (typeof TRADER_TOPICS)[number];
  isActive: boolean;
  index: number;
  onSelect: () => void;
};

function AccordionPanel({ topic, isActive, index, onSelect }: AccordionPanelProps) {
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

  return (
    <button
      type="button"
      aria-expanded={isActive}
      aria-label={topic.title}
      onClick={onSelect}
      style={
        isActive
          ? undefined
          : { flex: `0 0 ${COLLAPSED_PANEL_WIDTH}`, width: COLLAPSED_PANEL_WIDTH }
      }
      className={`relative min-w-0 cursor-pointer overflow-hidden rounded-2xl transition-[flex-grow,flex-basis,width,box-shadow] duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
        isActive
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
          isActive ? "" : "group-hover:scale-110"
        }`}
        priority={index === 0}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-opacity duration-300 ${
          isActive ? "" : "group-hover:opacity-80"
        }`}
      />

      {!isActive && (
        <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
      )}

      <ExpandedPanelContent
        isActive={isActive}
        title={topic.title}
        description={topic.description}
      />

      <div
        aria-hidden={!showCollapsedLabel || isActive}
        className={`absolute inset-x-0 bottom-0 bg-black/55 py-4 transition-[opacity,background-color] duration-300 ${
          showCollapsedLabel && !isActive ? "opacity-100" : "opacity-0"
        } ${!isActive ? "group-hover:bg-black/70" : ""}`}
      >
        <span
          className={`mx-auto block w-max whitespace-nowrap text-sm font-semibold tracking-wide text-white [writing-mode:vertical-rl] rotate-180 transition-transform duration-300 ${
            !isActive ? "group-hover:scale-105" : ""
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

  return (
    <div className="flex h-[min(420px,50vh)] w-full min-w-0 gap-2 sm:gap-3">
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
  );
}
