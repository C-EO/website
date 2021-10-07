import type { ProgramBenefit } from "../types/program-benefit.type";
import type { Feature } from "../types/feature.type";
import {
  codeAnywhereFeature,
  collaborationFeature,
  multiTrackDevelopmentFeature,
} from "./home/features";

export const features: Feature[] = [
  {
    title: "Develop like Google, Facebook or Shopify",
    paragraph:
      "What big tech companies are trying to build internally, Gitpod is bringing to the rest of the world:  container-based development in the cloud.",
    image: {
      src: "/terminal.png",
      alt: "Gitpod Prebuilds",
      classNames: "rounded-4xl shadow-normal",
    },
  },
  collaborationFeature,
  codeAnywhereFeature,
  multiTrackDevelopmentFeature,
];

export const programBenefits: ProgramBenefit[] = [
  {
    icon: {
      src: "/svg/media-kit/logo-mark.svg",
      alt: "Gitpod",
    },
    title: "Gitpod for free",
    text:
      "Don't worry about increased workload or adding more users as you grow. We'll be free for at least 1 year with unlimited users and usage.",
  },
  {
    icon: {
      src: "/svg/startups/2x.svg",
      alt: "2x",
    },
    title: "Double up",
    text:
      'If you are affiliated with <a href="/for/startups/organizations">an approved VC, incubator or accelerator</a> we will extend the program from 1 year to 2 years.',
  },
  {
    icon: {
      src: "/svg/startups/community.svg",
      alt: "Community",
    },
    title: "Join a thriving community",
    text:
      "Engage with, learn from and share best practices with other startups that use Gitpod.",
  },
];
