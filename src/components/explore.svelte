<script lang="ts">
  import Section from "./section.svelte";
  import type { ExploreSection } from "../types/explore-section.type";

  export let contents: ExploreSection;

  const {
    title = "Get Started",
    description = "Spin up fresh, automated dev environments for each task, in the cloud, in seconds.",
    note = "",
    link = {
      text: "Try Now",
      href: "/#get-started",
    },
    useKumquatIllustration = false,
  } = contents || {};
</script>

<style type="text/postcss">
  .explore {
    @apply flex items-center bg-off-white shadow-normal max-w-none text-left;
    border-radius: 4rem;
  }

  @media (max-width: 830px) {
    .explore {
      @apply flex-col rounded-2xl mx-auto text-center max-w-lg;
    }
  }

  .explore__text {
    @apply px-large;
    flex: 0 0 45%;

    @media (max-width: 830px) {
      @apply py-small px-x-small;
    }
  }

  .explore__paragraph {
    @apply mb-x-small;

    @media (max-width: 830px) {
      @apply max-w-sm;
    }
  }

  .explore__illustration {
    flex: 1;
    border-radius: inherit;
  }

  .explore__illustration .small {
    @apply hidden;
  }

  .explore__illustration img {
    @apply float-right;
    border-radius: inherit;
  }

  @media (max-width: 1020px) {
    .explore__illustration img {
      @apply hidden;
    }

    .explore__illustration .small {
      @apply block;
    }
  }
</style>

<Section>
  <div class="explore">
    <div class="explore__text">
      <h2 class="h1">{title}</h2>
      <p class="explore__paragraph text-p-large">
        {description}
      </p>
      {#if note}
        <p class="h5 font-semibold text-gray-900 mb-x-small md:-mt-micro">
          {note}
        </p>
      {/if}
      <a href={link.href} class="btn-conversion">{link.text}</a>
    </div>
    <div class="explore__illustration">
      <img
        src="/images/{useKumquatIllustration
          ? 'kumquat.png'
          : 'illustration-grid.jpg'}"
        alt="Gitpod in a Nutshell"
      />
      <img
        src="/images/{useKumquatIllustration
          ? 'kumquat.png'
          : 'illustration-small.jpg'}"
        class="small"
        class:p-x-small={!useKumquatIllustration}
        alt="Gitpod in a Nutshell"
      />
    </div>
  </div>
</Section>
