<script>
  import Section from "../section.svelte";
</script>

<style type="text/postcss">
  ul {
    max-width: 365px;

    @media (max-width: 1140px) {
      max-width: 330px;
    }
  }

  li {
    @apply mb-micro;
  }

  li::before {
    content: "—";
    @apply text-orange-800 mr-micro;
  }
</style>

<Section class="text-center">
  <h2>Eligibility criteria</h2>
  <p class="">
    To qualify for Gitpod’s startup program, your company needs to:
  </p>
  <ul class="text-left max-w-sm mx-auto my-small">
    <li>have raised no more than $10M in funding</li>
    <li>be founded less than 3 years ago</li>
    <li>have not been on any paid plan yet</li>
  </ul>
  <a href="https://bit.ly/3liFICY" target="_blank" class="btn-conversion"
    >Apply now</a
  >
</Section>
