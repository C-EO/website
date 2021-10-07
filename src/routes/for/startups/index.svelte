<script>
  import Section from "../../../components/section.svelte";
  import Features from "../../../components/features.svelte";
  import { features } from "../../../contents/startups";
  import ProgramBenefits from "../../../components/startups/program-benefits.svelte";
  import Header from "../../../components/startups/header.svelte";
  import Eligibility from "../../../components/startups/eligibility.svelte";
  import HelpfulResources from "../../../components/startups/helpful-resources.svelte";
</script>

<Header />

<Section>
  <h2 class="text-center -mb-16">Accelerate your workflow</h2>
  <Features {features} />
</Section>

<ProgramBenefits />

<Eligibility />

<HelpfulResources />
