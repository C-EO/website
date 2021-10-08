<script>
  import Section from "../../../components/section.svelte";
  import Features from "../../../components/features.svelte";
  import { exploreContents, features } from "../../../contents/startups";
  import ProgramBenefits from "../../../components/startups/program-benefits.svelte";
  import Header from "../../../components/startups/header.svelte";
  import Eligibility from "../../../components/startups/eligibility.svelte";
  import HelpfulResources from "../../../components/startups/helpful-resources.svelte";
  import Faqs from "../../../components/startups/faqs.svelte";
  import Explore from "../../../components/explore.svelte";
</script>

<Header />

<Section>
  <h2 class="text-center -mb-16">Accelerate your workflow</h2>
  <Features {features} />
</Section>

<ProgramBenefits />

<Eligibility />

<HelpfulResources />

<Faqs />

<Explore
  contents={exploreContents}
/>
