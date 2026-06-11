export const TRADER_TOPICS = [
  {
    title: "Budget planning",
    description:
      "Map daily sales and expenses so you know exactly what to reinvest, save, or spend to grow your stall with confidence.",
    image: "/images/budget-planning.png",
    alt: "Market trader writing a budget in a notebook beside fresh produce",
  },
  {
    title: "Debit and credit",
    description:
      "Track what customers owe you and what you owe suppliers to protect cash flow and build lasting trust in your market.",
    image: "/images/debit-credit.png",
    alt: "Trader reviewing a ledger to track customer credit and supplier debts",
  },
  {
    title: "Savings",
    description:
      "Set aside money for slow days, new stock, or emergencies so your business stays resilient through every season.",
    image: "/images/savings.png",
    alt: "Shop owner putting cash into a savings box",
  },
  {
    title: "Loans",
    description:
      "Understand borrowing and repayment so you can invest in inventory and equipment without putting your livelihood at risk.",
    image: "/images/loans.png",
    alt: "Small business owner reviewing loan paperwork at a market stall",
  },
  {
    title: "Saving groups",
    description:
      "Save together with fellow traders, access shared funds when needed, and support each other's growth as a community.",
    image: "/images/saving-groups.png",
    alt: "Group of market traders contributing to a community savings group",
  },
  {
    title: "Mobile banking",
    description:
      "Send, receive, and manage money from your phone to serve customers faster and keep clear records of every transaction.",
    image: "/images/mobile-banking.png",
    alt: "Trader using a smartphone to receive a mobile payment at a stall",
  },
] as const;

export type TraderTopic = (typeof TRADER_TOPICS)[number];

export const PANEL_TRANSITION_MS = 500;
export const COLLAPSED_PANEL_WIDTH = "4rem";
export const PANEL_REVEAL_DELAY_MS = 250;

export const DEFAULT_HEADING_LINES = ["Learn.", "Save.", "Grow."] as const;

export const DEFAULT_DESCRIPTION =
  "Practical financial skills that help market traders plan smarter, save steadily, and elevate their businesses.";

export const HEADING_LINE_COLORS = [
  "text-purple-900",
  "text-purple-700",
  "text-purple-500",
] as const;
