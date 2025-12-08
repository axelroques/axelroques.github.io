<script>
  export let entry = {};

  function formatCitation(entry) {
    // Map your internal types to BibTeX entry types
    let bibType = "misc";
    if (entry.type === "Publication") bibType = "article";
    if (entry.type === "Talk" || entry.type === "Poster") bibType = "inproceedings";

    // Generate BibTeX
    let bib = `@${bibType}{${entry.label},\n`;

    for (const [key, value] of Object.entries(entry)) {
      if (
        key !== "type" &&    // excluded (for internal use only)
        key !== "label" &&   // excluded (for internal use only)
        value !== undefined &&
        value !== null &&
        value !== ""
      ) {
        bib += `  ${key} = {${value}},\n`;
      }
    }

    bib += `}`;

    return bib;
  }

  async function copyCitation() {
    const text = formatCitation(entry);
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
      setTimeout(() => copied = false, 1200);
    } catch (error) {
      console.error("Clipboard copy failed:", error);
    }
  }

  let copied = false;
</script>

<div class="flex justify-between space-x-4 mb-3 ml-3">
  
  <!-- Citation details -->
  <div class="flex justify-center items-center text-accent-grey">*</div>
  <div class="w-full flex flex-col justify-center">
    <h3 class="text-lightest text-base">
      {#if entry.url}
        <a href={entry.url} target="_blank"
          class="border-b border-transparent hover:border-lightest">
          {entry.title}
        </a>
      {:else}
        {entry.title}
      {/if}
    </h3>

    <p class="text-light text-sm">{entry.author}</p>

    {#if entry.journal || entry.booktitle}
      <p class="text-accent-grey text-sm italic">
        {entry.journal || entry.booktitle}, {entry.year}
      </p>
    {:else}
      <p class="text-accent-grey text-sm italic">
        {entry.year}
      </p>
    {/if}
  </div>

  <!-- Action icons -->
  <div class="flex justify-center items-center space-x-2 text-light">
    <a 
      class="border-b border-transparent hover:text-lightest hover:border-lightest"
      href={"/" + entry.type + "s/" + entry.label + ".pdf"} target="_blank"
      title="View"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    </a>
    <button
      class="border-b border-transparent hover:cursor-pointer hover:text-lightest hover:border-lightest relative"
      title="Copy citation"
      on:click={copyCitation}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
      </svg>
      {#if copied}
        <span class="absolute -top-5 -top-5 left-1/2 -translate-x-1/2 text-xs text-lightest">
          Copied!
        </span>
      {/if}
    </button>
  </div>
</div>
