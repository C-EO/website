<script>
import { exploreContents } from "../../../contents/startups";

  import Explore from "../../../components/explore.svelte";
import Find from "../../../components/startups/find.svelte";

</script>

<header>
  <h1>Approved Organisations</h1>
  <p class="text-lg">
    If your startup is affiliated with a Gitpod approved VC, incubator or
    accelerator we will extend the Gitpod startup program from 1 year to 2
    years.
  </p>
  <a href="/for/startups" class="btn-conversion mt-x-small">View startup program</a>
</header>

<Find />

<Explore contents={exploreContents} />