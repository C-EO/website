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

export const faqs: {title: string, text: string}[] = [
  {
    title: 'Are both SaaS and the self-hosted option part of the program?',
    text: 'We are happy to manage Gitpod for you to let you focus on the important things, but if you want to self-host on your infrastructure, that\'s possible too, without user limit.'
  },
  {
    title: 'How do I know if my accelerator/incubator/VC firm is part of Gitpod for Startups?',
    text: 'Please check this list (link to be added). You still get one year for free, even if you don\'t find your organisation on the list.'

  },
  {
    title: 'What happens after the end of the program?',
    text: 'At the end of the program, you decide if you want to keep using Gitpod in a professional plan or in the free plan with limited usage. You\'ll be notified before the end of the program.'
  },
  {
    title: 'I\'m not eligible but still want to use Gitpod',
    text: 'We have a very generous <a href="/pricing">free plan</a> for up to 50h a month, including private repos.'
  }
]
