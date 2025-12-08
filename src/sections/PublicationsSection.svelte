<script>
    import { parseBibFile } from "../lib/parseBibFile.js";
    import Citation from "../components/Citation.svelte";
    import Box from "../components/Box.svelte";

    let publications = [];
    let talks = [];
    let posters = [];

    async function loadBib() {
        const res = await fetch("/citations.bib");
        const text = await res.text();
        const entries = parseBibFile(text);

        publications = entries.filter(e => e.type === "Publication");
        talks = entries.filter(e => e.type === "Talk");
        posters = entries.filter(e => e.type === "Poster");
    }

    loadBib();
</script>

<Box id="publications" title="Publications.">

  <!-- Publications -->
  {#if publications.length}
    <h3 class="text-xl text-lightest mt-6 mb-2">> Papers</h3>
    {#each publications as e}
      <Citation entry={e} />
    {/each}
  {/if}

  <!-- Talks -->
  {#if talks.length}
    <h3 class="text-xl text-lightest mt-10 mb-2">> Talks</h3>
    {#each talks as e}
      <Citation entry={e} />
    {/each}
  {/if}

  <!-- Posters -->
  {#if posters.length}
    <h3 class="text-xl text-lightest mt-10 mb-2">> Posters</h3>
    {#each posters as e}
      <Citation entry={e} />
    {/each}
  {/if}

</Box>
