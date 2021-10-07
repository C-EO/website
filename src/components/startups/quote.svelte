<style type="text/postcss">
  [class|="kumquat"] {
    @apply absolute;
  }

  .kumquat-left {
    @apply h-16 md:h-32 md:w-36 top-24 -left-12 md:-left-24 -z-10;

    @media (max-width: 600px) {
      @apply h-10 -left-8;
    }
  }

  .kumquat-right {
    @apply h-20 md:h-36 md:w-44 -right-16 md:-right-32 -z-10 bottom-0 md:-bottom-10;

    @media (max-width: 600px) {
      @apply h-10 -right-9;
    }
  }
</style>

<div class="relative card shadow-xl bg-white mt-x-large py-small md:mx-auto">
  <img
    src="/images/startups/kumquat-left.png"
    alt="Gitpod Kumquat"
    class="kumquat-left"
  />
  <p class="text-large italic sm:px-micro lg:px-medium">
    “Using Gitpod will improve your feature velocity and drastically reduce your
    cycle times from commit to deploy.”
  </p>
  <div class="inline-flex items-center text-left mt-x-small">
    <img
      src="/images/startups/fabian-lange.png"
      class="h-14 w-14 sm:h-16 sm:w-16 mr-xx-small"
      alt="Fabian Lange"
    />
    <div class="text-gray-900">
      <p class="font-semibold">Fabian Lange</p>
      <p>Founder & Chief Engineer</p>
      <img
        src="/images/startups/instana.png"
        class="mt-macro h-10"
        alt="Instana"
      />
    </div>
  </div>
  <img
    src="/images/startups/kumquat-right.png"
    alt="Gitpod Kumquat"
    class="kumquat-right"
  />
</div>
