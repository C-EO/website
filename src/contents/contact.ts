import type { ContactAction } from "src/types/contact-action.type";

export const contactActions: ContactAction[] = [
  {
    icon: "support.svg",
    title: "Support",
    text: "Get help with any question or  issue.",
    link: {
      text: "Get Support",
      href: "/support",
    },
  },
  {
    icon: "sales.svg",
    title: "Sales",
    text: "We’d love to talk about how we can work together.",
    link: {
      text: "Contact Sales",
      href: "/contact/sales",
    },
  },
  {
    icon: "community.svg",
    title: "Community",
    text: "Connect with the community to get help for common requests.",
    link: {
      text: "Open community",
      href: "/community",
    },
  },
  {
    icon: "docs.svg",
    title: "Docs",
    text: "Learn more about how to become always ready to code.",
    link: {
      text: "Open documentation",
      href: "/docs",
    },
  },
];
