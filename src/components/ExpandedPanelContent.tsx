"use client";

import { useEffect, useState } from "react";

import { PANEL_REVEAL_DELAY_MS } from "@/constants/traderTopics";

export type ExpandedPanelContentProps = {
  isActive: boolean;
  title: string;
  description: string;
  revealDelayMs?: number;
  className?: string;
};

export function ExpandedPanelContent({
  isActive,
  title,
  description,
  revealDelayMs = PANEL_REVEAL_DELAY_MS,
  className = "",
}: ExpandedPanelContentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => setVisible(true), revealDelayMs);
    return () => window.clearTimeout(timer);
  }, [isActive, revealDelayMs]);

  if (!isActive) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6 ${className}`.trim()}
    >
      <div
        className={`text-left transition-all duration-500 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <h3 className="text-lg font-semibold text-white sm:text-2xl">{title}</h3>
        <p className="text-sm leading-relaxed text-white/85">{description}</p>
      </div>
    </div>
  );
}
