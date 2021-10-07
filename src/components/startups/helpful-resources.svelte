<script lang="ts">
  import PostPreview from "../blog/post-preview.svelte";
  import Section from "../section.svelte";
  import { session } from "$app/stores";
  import type { BlogPost } from "src/types/blog-post.type";

  const post = $session.posts.find(
    (p: BlogPost) =>
      p.slug === "i-said-goodbye-to-local-development-and-so-can-you"
  );
</script>

<Section>
  <div class="text-center max-w-3xl mx-auto">
    <h2>Helpful resources</h2>
    <p class="text-large">
      If you are still uncertain about moving your local dev environment to the
      cloud, this blog post will clear your thoughts.
    </p>
  </div>
  <div class="max-w-7xl mx-auto mt-small">
    <PostPreview {post} type="blog" layout="row" isMostRecent={true} />
  </div>
</Section>
