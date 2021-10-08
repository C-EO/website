<script>
  import { orgs } from "../../contents/startups";
  import Section from "../section.svelte";

  let orgsToRender = orgs.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
</script>

<Section>
  <h2 class="h3">Find your VC or accelerator</h2>
  {#each orgsToRender as org}
    <pre>
			{JSON.stringify(org, null, 2)}
		</pre>
  {/each}
</Section>
