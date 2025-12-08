<script>
  import { currentRoute, navigate } from "./lib/router.js";
  import { onMount } from "svelte";

  import PublicationsSection from "./sections/PublicationsSection.svelte";
  import AboutSection from "./sections/AboutSection.svelte";
  import MiscSection from "./sections/MiscSection.svelte";

  // Routing
  let route = $state($currentRoute);
  $effect(() => {
    route = $currentRoute;
  });
</script>

<!-- Page background -->
<div class="min-h-screen bg-dark flex flex-col font-sans">

  <!-- Header -->
  <header class="w-full flex justify-center py-4 bg-dark sticky top-0 z-20 border-b-2 border-darkest">
    <div class="w-5/6 flex items-center justify-between">

      <h1 class="py-2 text-3xl tracking-widest text-lightest border-b">
        Axel Roques.
      </h1>

      <nav class="flex space-evenly space-x-4 text-light">
        <button
          onclick={() => navigate("/about")}
          class="border-b border-transparent hover:border-lightest hover:text-lightest hover:cursor-pointer
            { route === '/about' ? 'text-lightest !border-lightest' : '' }"
         >About
        </button>
        <button
          onclick={() => navigate("/publications")}
          class="border-b border-transparent hover:border-lightest hover:text-lightest hover:cursor-pointer
            { route === '/publications' ? 'text-lightest !border-lightest' : '' }"
          >Publications
        </button>
        <button
          onclick={() => navigate("/misc")}
          class="border-b border-transparent hover:border-lightest hover:text-lightest hover:cursor-pointer
            { route === '/misc' ? 'text-lightest !border-lightest' : '' }"
          >Misc.
        </button>
      </nav>

    </div>
  </header>

  <!-- Sections -->
  <main class="flex flex-col justify-center items-center flex-grow">
    {#if route === "/about"}
      <AboutSection />
    {:else if route === "/publications"}
      <PublicationsSection />
    {:else if route === "/misc"}
      <MiscSection />
    {:else}
      <AboutSection /> <!-- fallback -->
    {/if}
  </main>

  
  <!-- <main class="flex-grow flex items-center justify-center px-4 py-10">
    <div class="max-w-2xl w-full p-8 border-2 border-darkest rounded-lg bg-dark-light shadow-lg text-text-dark-secondary">
      <h2 class="text-2xl font-medium text-lightest mb-4">
        Welcome
      </h2>
      <p class="leading-relaxed text-light">
        This is a test content box to verify the layout, typography, and
        color palette.
      </p>

      <div class="mt-6 space-x-4 flex">
        <p class="text-accent-green">Accent Green</p>
        <p class="text-accent-orange">Accent Orange</p>
        <p class="text-accent-blue">Accent Blue</p>
        <p class="text-accent-red">Accent Red</p>
      </div>
    </div>
  </main> -->

</div>
