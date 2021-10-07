type Link = {
  text: string;
  href: string;
};

export type ExploreSection = {
  title?: string;
  description?: string;
  note?: string;
  link?: Link;
  useKumquatIllustration?: boolean
};
