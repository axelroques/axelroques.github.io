<script>
  import { currentRoute } from "./lib/router.js";

  import PublicationsSection from "./sections/PublicationsSection.svelte";
  import ResourcesSection from "./sections/ResourcesSection.svelte";
  import AboutSection from "./sections/AboutSection.svelte";
  import Header from "./components/Header.svelte";
</script>

<!-- Page background -->
<div class="min-h-screen bg-dark flex flex-col font-sans">

  <Header />

  <!-- Sections -->
  <main class="flex flex-col justify-center items-center flex-grow">
    {#if $currentRoute === "/about"}
      <AboutSection />
    {:else if $currentRoute === "/publications"}
      <PublicationsSection />
    {:else if $currentRoute === "/resources"}
      <ResourcesSection />
    {:else}
      <AboutSection /> <!-- fallback -->
    {/if}
  </main>

</div>
