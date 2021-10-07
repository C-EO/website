<script>
  import { programBenefits } from "../../contents/startups";
  import Section from "../section.svelte";
</script>

<style type="text/postcss">
  .benefit {
    flex: 0 0 32%;

    @media (max-width: 1024px) {
      max-width: 406px;
    }
  }
</style>

<Section class="text-center">
  <h2>Program Benefits</h2>
  <p>
    <a href="https://bit.ly/3liFICY" target="_blank">Apply now</a> and receive these
    unique benefits.
  </p>
  <div class="flex flex-col lg:flex-row justify-between">
    {#each programBenefits as f}
      <div
        class="benefit mx-auto bg-off-white rounded-2xl shadow-normal px-xx-small py-small xl:px-small mt-small"
      >
        <img src={f.icon.src} alt={f.icon.alt} class="mx-auto h-20" />
        <h3 class="h5 mt-x-small mb-micro">{f.title}</h3>
        <p>{@html f.text}</p>
      </div>
    {/each}
  </div>
</Section>
