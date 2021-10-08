import type { ProgramBenefit } from "../types/program-benefit.type";
import type { Feature } from "../types/feature.type";
import {
  codeAnywhereFeature,
  collaborationFeature,
  multiTrackDevelopmentFeature,
} from "./home/features";
import type { ExploreSection } from "src/types/explore-section.type";
import { terminalSource } from "./terminal";

export const features: Feature[] = [
  {
    title: "Develop like Google, Facebook or Shopify",
    paragraph:
      "What big tech companies are trying to build internally, Gitpod is bringing to the rest of the world:  container-based development in the cloud.",
    terminal: {
      source: terminalSource,
    },
  },
  { ...collaborationFeature, paragraph: 'Share running workspaces for pair programming, use port forwarding or share a snapshot as a copy of your workspace with teammates.' },
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
      'If your startup is affiliated with <a href="/for/startups/organizations">an approved VC, incubator or accelerator</a> we will extend the program from 1 year to 2 years.',
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

export const faqs: { title: string, text: string }[] = [
  {
    title: 'Are both SaaS and the self-hosted option part of the program?',
    text: 'We are happy to manage Gitpod for you to let you focus on the important things, but if you want to <a href="/docs/self-hosted/latest">self-host</a> on your infrastructure, that\'s possible too, without user limit.'
  },
  {
    title: 'How do I know if my accelerator/incubator/VC firm is part of Gitpod for Startups?',
    text: 'Please check this list <a href="/for/startups/organizations">of organizations</a>. You still get one year for free, even if you don\'t find your organisation on the list.'

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

export const exploreContents: ExploreSection = {
  title: "Apply Now",
  note: "Use all our services for free, up to 2 years.",
  link: { text: "Apply Now", href: "https://bit.ly/3liFICY" },
  useKumquatIllustration: true
};

export const orgs = [
  {
    "name": "Y Combinator",
    "url": "https://www.crunchbase.com/organization/y-combinator",
  },
  {
    "name": "Techstars",
    "url": "https://www.crunchbase.com/organization/techstars"
  },
  {
    "name": "500 Startups",
    "url": "https://www.crunchbase.com/organization/500-startups"
  },
  {
    "name": "MassChallenge",
    "url": "https://www.crunchbase.com/organization/masschallenge"
  },
  {
    "name": "New Enterprise Associates",
    "url": "https://www.crunchbase.com/organization/new-enterprise-associates"
  },
  {
    "name": "SOSV",
    "url": "https://www.crunchbase.com/organization/sosv"
  },
  {
    "name": "Accel",
    "url": "https://www.crunchbase.com/organization/accel"
  },
  {
    "name": "Intel Capital",
    "url": "https://www.crunchbase.com/organization/intel-capital"
  },
  {
    "name": "Kleiner Perkins",
    "url": "https://www.crunchbase.com/organization/kleiner-perkins-caufield-byers"
  },
  {
    "name": "Bessemer Venture Partners",
    "url": "https://www.crunchbase.com/organization/bessemer-venture-partners"
  },
  {
    "name": "Plug and Play Tech Center",
    "url": "https://www.crunchbase.com/organization/plug-and-play-ventures"
  },
  {
    "name": "Crowdcube",
    "url": "https://www.crunchbase.com/organization/crowdcube"
  },
  {
    "name": "Andreessen Horowitz",
    "url": "https://www.crunchbase.com/organization/andreessen-horowitz"
  },
  {
    "name": "Lightspeed Venture Partners",
    "url": "https://www.crunchbase.com/organization/lightspeed-venture-partners"
  },
  {
    "name": "Index Ventures",
    "url": "https://www.crunchbase.com/organization/index-ventures"
  },
  {
    "name": "Goldman Sachs",
    "url": "https://www.crunchbase.com/organization/goldman-sachs"
  },
  {
    "name": "General Catalyst",
    "url": "https://www.crunchbase.com/organization/general-catalyst-partners"
  },
  {
    "name": "GV",
    "url": "https://www.crunchbase.com/organization/google-ventures"
  },
  {
    "name": "Khosla Ventures",
    "url": "https://www.crunchbase.com/organization/khosla-ventures"
  },
  {
    "name": "Threshold",
    "url": "https://www.crunchbase.com/organization/threshold"
  },
  {
    "name": "Venrock",
    "url": "https://www.crunchbase.com/organization/venrock"
  },
  {
    "name": "Greylock",
    "url": "https://www.crunchbase.com/organization/greylock"
  },
  {
    "name": "First Round Capital",
    "url": "https://www.crunchbase.com/organization/first-round-capital"
  },
  {
    "name": "Battery Ventures",
    "url": "https://www.crunchbase.com/organization/battery-ventures"
  },
  {
    "name": "Norwest Venture Partners",
    "url": "https://www.crunchbase.com/organization/norwest-venture-partners"
  },
  {
    "name": "Start-Up Chile",
    "url": "https://www.crunchbase.com/organization/start-up-chile"
  },
  {
    "name": "Insight Partners",
    "url": "https://www.crunchbase.com/organization/insight-partners"
  },
  {
    "name": "GGV Capital",
    "url": "https://www.crunchbase.com/organization/ggv-capital"
  },
  {
    "name": "Canaan Partners",
    "url": "https://www.crunchbase.com/organization/canaan-partners"
  },
  {
    "name": "Menlo Ventures",
    "url": "https://www.crunchbase.com/organization/menlo-ventures"
  },
  {
    "name": "Redpoint",
    "url": "https://www.crunchbase.com/organization/redpoint-ventures"
  },
  {
    "name": "Founders Fund",
    "url": "https://www.crunchbase.com/organization/founders-fund"
  },
  {
    "name": "Tiger Global Management",
    "url": "https://www.crunchbase.com/organization/tiger-global"
  },
  {
    "name": "Polaris Partners",
    "url": "https://www.crunchbase.com/organization/polaris-partners"
  },
  {
    "name": "Benchmark",
    "url": "https://www.crunchbase.com/organization/benchmark"
  },
  {
    "name": "Foundation Capital",
    "url": "https://www.crunchbase.com/organization/foundation-capital"
  },
  {
    "name": "High-Tech Grunderfonds",
    "url": "https://www.crunchbase.com/organization/high-tech-gründerfonds"
  },
  {
    "name": "ZhenFund",
    "url": "https://www.crunchbase.com/organization/zhenfund"
  },
  {
    "name": "Mayfield Fund",
    "url": "https://www.crunchbase.com/organization/mayfield-fund"
  },
  {
    "name": "Greycroft",
    "url": "https://www.crunchbase.com/organization/greycroft"
  },
  {
    "name": "Qiming Venture Partners",
    "url": "https://www.crunchbase.com/organization/qiming-venture-partners"
  },
  {
    "name": "Matrix Partners",
    "url": "https://www.crunchbase.com/organization/matrix-partners"
  },
  {
    "name": "CRV",
    "url": "https://www.crunchbase.com/organization/crvvc"
  },
  {
    "name": "Atlas Venture",
    "url": "https://www.crunchbase.com/organization/atlas-venture"
  },
  {
    "name": "DCM Ventures",
    "url": "https://www.crunchbase.com/organization/dcm"
  },
  {
    "name": "Technology Development Fund",
    "url": "https://www.crunchbase.com/organization/technologydevelopmentfund"
  },
  {
    "name": "U.S. Venture Partners",
    "url": "https://www.crunchbase.com/organization/us-venture-partners"
  },
  {
    "name": "Lerer Hippeau",
    "url": "https://www.crunchbase.com/organization/lerer-ventures"
  },
  {
    "name": "RRE Ventures",
    "url": "https://www.crunchbase.com/organization/rre-ventures"
  },
  {
    "name": "True Ventures",
    "url": "https://www.crunchbase.com/organization/true-ventures"
  },
  {
    "name": "Summit Partners",
    "url": "https://www.crunchbase.com/organization/summit-partners"
  },
  {
    "name": "Felicis Ventures",
    "url": "https://www.crunchbase.com/organization/felicis-ventures"
  },
  {
    "name": "Matrix Partners China",
    "url": "https://www.crunchbase.com/organization/matrix-partners-china"
  },
  {
    "name": "Global Founders Capital",
    "url": "https://www.crunchbase.com/organization/global-founders-capital"
  },
  {
    "name": "Highland Capital Partners",
    "url": "https://www.crunchbase.com/organization/highland-capital-partners"
  },
  {
    "name": "Bain Capital Ventures",
    "url": "https://www.crunchbase.com/organization/bain-capital-ventures"
  },
  {
    "name": "BDC Venture Capital",
    "url": "https://www.crunchbase.com/organization/bdc-venture-capital"
  },
  {
    "name": "BoxGroup",
    "url": "https://www.crunchbase.com/organization/boxgroup"
  },
  {
    "name": "Trinity Ventures",
    "url": "https://www.crunchbase.com/organization/trinity-ventures"
  },
  {
    "name": "Hiventures",
    "url": "https://www.crunchbase.com/organization/hiventures"
  },
  {
    "name": "Alchemist Accelerator",
    "url": "https://www.crunchbase.com/organization/alchemist-accelerator"
  },
  {
    "name": "Startupbootcamp",
    "url": "https://www.crunchbase.com/organization/startupbootcamp"
  },
  {
    "name": "FJ Labs",
    "url": "https://www.crunchbase.com/organization/fj-labs"
  },
  {
    "name": "Innovation Works",
    "url": "https://www.crunchbase.com/organization/innovation-works"
  },
  {
    "name": "InterWest Partners",
    "url": "https://www.crunchbase.com/organization/interwest-partners"
  },
  {
    "name": "Spark Capital",
    "url": "https://www.crunchbase.com/organization/spark-capital"
  },
  {
    "name": "North Bridge Venture Partners & Growth Equity",
    "url": "https://www.crunchbase.com/organization/north-bridge-venture-partners"
  },
  {
    "name": "Partech",
    "url": "https://www.crunchbase.com/organization/partech"
  },
  {
    "name": "Oak Investment Partners",
    "url": "https://www.crunchbase.com/organization/oak-investment-partners"
  },
  {
    "name": "Shenzhen Capital Group",
    "url": "https://www.crunchbase.com/organization/shenzhen-capital-group"
  },
  {
    "name": "DCVC",
    "url": "https://www.crunchbase.com/organization/data-collective"
  },
  {
    "name": "Northstar Ventures",
    "url": "https://www.crunchbase.com/organization/northstar-ventures"
  },
  {
    "name": "Eight Roads Ventures",
    "url": "https://www.crunchbase.com/organization/eight-roads-ventures"
  },
  {
    "name": "Innovate UK",
    "url": "https://www.crunchbase.com/organization/innovate-u-k-"
  },
  {
    "name": "Vertex Ventures",
    "url": "https://www.crunchbase.com/organization/vertex-ventures"
  },
  {
    "name": "Madrona Venture Group",
    "url": "https://www.crunchbase.com/organization/madrona-venture-group"
  },
  {
    "name": "Crosslink Capital",
    "url": "https://www.crunchbase.com/organization/crosslink-capital"
  },
  {
    "name": "Western Technology Investment",
    "url": "https://www.crunchbase.com/organization/western-technology-investment"
  },
  {
    "name": "Austin Ventures",
    "url": "https://www.crunchbase.com/organization/austin-ventures"
  },
  {
    "name": "Social Starts",
    "url": "https://www.crunchbase.com/organization/social-starts"
  },
  {
    "name": "Initialized Capital",
    "url": "https://www.crunchbase.com/organization/initialized-capital"
  },
  {
    "name": "ARCH Venture Partners",
    "url": "https://www.crunchbase.com/organization/arch-venture-partners"
  },
  {
    "name": "Berkeley SkyDeck",
    "url": "https://www.crunchbase.com/organization/skydeck-berkeley"
  },
  {
    "name": "HAX",
    "url": "https://www.crunchbase.com/organization/hax-accelerator"
  },
  {
    "name": "IVP (Institutional Venture Partners)",
    "url": "https://www.crunchbase.com/organization/institutional-venture-partners"
  },
  {
    "name": "Mitsubishi UFJ Capital",
    "url": "https://www.crunchbase.com/organization/mitsubishi-ufj-capital"
  },
  {
    "name": "SMBC Venture Capital",
    "url": "https://www.crunchbase.com/organization/smbc-venture-capital"
  },
  {
    "name": "East Ventures",
    "url": "https://www.crunchbase.com/organization/east-ventures"
  },
  {
    "name": "Social Capital",
    "url": "https://www.crunchbase.com/organization/social-capital"
  },
  {
    "name": "Seedcamp",
    "url": "https://www.crunchbase.com/organization/seedcamp"
  },
  {
    "name": "Uncork Capital",
    "url": "https://www.crunchbase.com/organization/softtech-vc"
  },
  {
    "name": "Shasta Ventures",
    "url": "https://www.crunchbase.com/organization/shasta-ventures"
  },
  {
    "name": "Internet Initiatives Development Fund (IIDF)",
    "url": "https://www.crunchbase.com/organization/internet-initiatives-develompent-fund-iidf"
  },
  {
    "name": "Morgenthaler Ventures",
    "url": "https://www.crunchbase.com/organization/morgenthaler-ventures"
  },
  {
    "name": "Techstars Ventures",
    "url": "https://www.crunchbase.com/organization/bullet-time-ventures"
  },
  {
    "name": "Sierra Ventures",
    "url": "https://www.crunchbase.com/organization/sierra-ventures"
  },
  {
    "name": "Versant Ventures",
    "url": "https://www.crunchbase.com/organization/versant-ventures"
  },
  {
    "name": "Comcast Ventures",
    "url": "https://www.crunchbase.com/organization/comcast-interactive-capital"
  },
  {
    "name": "Flybridge",
    "url": "https://www.crunchbase.com/organization/flybridge-capital"
  },
  {
    "name": "HV Capital",
    "url": "https://www.crunchbase.com/organization/holtzbrinck-ventures"
  },
  {
    "name": "Headline",
    "url": "https://www.crunchbase.com/organization/headlinevc"
  },
  {
    "name": "Upfront Ventures",
    "url": "https://www.crunchbase.com/organization/upfront-ventures"
  },
  {
    "name": "Floodgate",
    "url": "https://www.crunchbase.com/organization/floodgate"
  },
  {
    "name": "Sigma Partners",
    "url": "https://www.crunchbase.com/organization/sigma-partners"
  },
  {
    "name": "Meritech Capital Partners",
    "url": "https://www.crunchbase.com/organization/meritech-capital-partners"
  },
  {
    "name": "Global Brain Corporation",
    "url": "https://www.crunchbase.com/organization/global-brain-corporation"
  },
  {
    "name": "Balderton Capital",
    "url": "https://www.crunchbase.com/organization/balderton-capital"
  },
  {
    "name": "Dreamit Ventures",
    "url": "https://www.crunchbase.com/organization/dreamit-ventures"
  },
  {
    "name": "Business Growth Fund",
    "url": "https://www.crunchbase.com/organization/business-growth-fund"
  },
  {
    "name": "Newchip",
    "url": "https://www.crunchbase.com/organization/newchip"
  },
  {
    "name": "Union Square Ventures",
    "url": "https://www.crunchbase.com/organization/union-square-ventures"
  },
  {
    "name": "Foundry Group",
    "url": "https://www.crunchbase.com/organization/foundry-group"
  },
  {
    "name": "StartX (Stanford-StartX Fund)",
    "url": "https://www.crunchbase.com/organization/stanfordstartx-fund"
  },
  {
    "name": "NEXT Canada",
    "url": "https://www.crunchbase.com/organization/the-next-36"
  },
  {
    "name": "Entrepreneurs Roundtable Accelerator",
    "url": "https://www.crunchbase.com/organization/er-accelerator"
  },
  {
    "name": "IndieBio",
    "url": "https://www.crunchbase.com/organization/synbio-axlr8r"
  },
  {
    "name": "Forum Ventures",
    "url": "https://www.crunchbase.com/organization/forumventures"
  },
  {
    "name": "Earlybird Venture Capital",
    "url": "https://www.crunchbase.com/organization/earlybird-venture-capital"
  },
  {
    "name": "Entrepreneur First",
    "url": "https://www.crunchbase.com/organization/entrepreneur-first"
  },
  {
    "name": "Speedinvest",
    "url": "https://www.crunchbase.com/organization/speedinvest"
  },
  {
    "name": "Boost VC",
    "url": "https://www.crunchbase.com/organization/boostfunder"
  },
  {
    "name": "DMZ",
    "url": "https://www.crunchbase.com/organization/digital-media-zone"
  },
  {
    "name": "Microsoft Accelerator",
    "url": "https://www.crunchbase.com/organization/microsoft-ventures"
  },
  {
    "name": "EIT Digital Accelerator",
    "url": "https://www.crunchbase.com/organization/eit-digital-accelerator"
  },
  {
    "name": "Lanzadera Accelerator",
    "url": "https://www.crunchbase.com/organization/lanzadera-accelerator"
  },
  {
    "name": "Antler",
    "url": "https://www.crunchbase.com/organization/antler-be9c"
  },
  {
    "name": "Chinaccelerator",
    "url": "https://www.crunchbase.com/organization/chinaccelerator"
  },
  {
    "name": "SAP.iO",
    "url": "https://www.crunchbase.com/organization/sap-io"
  },
  {
    "name": "Point Nine",
    "url": "https://www.crunchbase.com/organization/point-nine-capital"
  },
  {
    "name": "Revolution’s Rise of the Rest Seed Fund",
    "url": "https://www.crunchbase.com/organization/rise-of-the-rest"
  },
  {
    "name": "Wilco",
    "url": "https://www.crunchbase.com/organization/scientipole-initiative"
  },
  {
    "name": "Startup Wise Guys",
    "url": "https://www.crunchbase.com/organization/startup-wise-guys"
  },
  {
    "name": "MedTech Innovator",
    "url": "https://www.crunchbase.com/organization/medtechinnovator"
  },
  {
    "name": "AngelPad",
    "url": "https://www.crunchbase.com/organization/angelpad"
  },
  {
    "name": "Creandum",
    "url": "https://www.crunchbase.com/organization/creandum"
  },
  {
    "name": "Founder Friendly Labs",
    "url": "https://www.crunchbase.com/organization/ffl"
  },
  {
    "name": "Mucker Capital",
    "url": "https://www.crunchbase.com/organization/muckercapital"
  },
  {
    "name": "EPIC Ventures",
    "url": "https://www.crunchbase.com/organization/epic-ventures"
  },
  {
    "name": "Capital Factory",
    "url": "https://www.crunchbase.com/organization/capital-factory"
  },
  {
    "name": "Rockstart",
    "url": "https://www.crunchbase.com/organization/rockstart-accelerator"
  },
  {
    "name": "Boomtown Accelerators",
    "url": "https://www.crunchbase.com/organization/boomtown-accelerator"
  },
  {
    "name": "Village Global",
    "url": "https://www.crunchbase.com/organization/village-global-2"
  },
  {
    "name": "Bethnal Green Ventures",
    "url": "https://www.crunchbase.com/organization/bethnal-green-ventures"
  },
  {
    "name": "Project A Ventures",
    "url": "https://www.crunchbase.com/organization/project-a-ventures"
  },
  {
    "name": "Starve Ups",
    "url": "https://www.crunchbase.com/organization/starve-ups"
  },
  {
    "name": "Quake Capital Partners",
    "url": "https://www.crunchbase.com/organization/quake-capital-partners"
  },
  {
    "name": "Amplify.LA",
    "url": "https://www.crunchbase.com/organization/amplify-la"
  },
  {
    "name": "SparkLabs Accelerator",
    "url": "https://www.crunchbase.com/organization/sparklabs-accelerator"
  },
  {
    "name": "Target Global",
    "url": "https://www.crunchbase.com/organization/target-ventures"
  },
  {
    "name": "JumpStart",
    "url": "https://www.crunchbase.com/organization/jumpstartinc"
  },
  {
    "name": "Microsoft Accelerator Beijing",
    "url": "https://www.crunchbase.com/organization/microsoft-ventures-accelerator-beijing-2"
  },
  {
    "name": "OpenView",
    "url": "https://www.crunchbase.com/organization/openview-venture-partners"
  },
  {
    "name": "EQT Ventures",
    "url": "https://www.crunchbase.com/organization/eqtventures"
  },
  {
    "name": "Kinnevik AB",
    "url": "https://www.crunchbase.com/organization/investment-ab-kinnevik"
  },
  {
    "name": "Cherry Ventures",
    "url": "https://www.crunchbase.com/organization/cherry-ventures"
  },
  {
    "name": "Target Partners",
    "url": "https://www.crunchbase.com/organization/target-partners"
  },
  {
    "name": "Axel Springer Plug and Play Accelerator",
    "url": "https://www.crunchbase.com/organization/axel-springer-plug-and-play-accelerator"
  },
  {
    "name": "Gradient Ventures",
    "url": "https://www.crunchbase.com/organization/gradient-ventures"
  },
  {
    "name": "Flat6Labs",
    "url": "https://www.crunchbase.com/organization/flat6labs"
  },
  {
    "name": "Dawn Capital",
    "url": "https://www.crunchbase.com/organization/dawn-capital"
  },
  {
    "name": "Founders Factory",
    "url": "https://www.crunchbase.com/organization/founders-factory"
  },
  {
    "name": "Capnamic Ventures",
    "url": "https://www.crunchbase.com/organization/capnamic-ventures"
  },
  {
    "name": "Sequoia Capital",
    "url": "https://www.crunchbase.com/organization/sequoia-capital"
  }
]