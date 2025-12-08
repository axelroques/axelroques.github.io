<script>
  export let title = "";
  export let authors = "";
  export let venue = "";
  export let year = "";
  export let link = "";
</script>

<div class="mb-4">
  <h3 class="text-lightest font-medium text-lg">
    {#if link}
      <a href={link} target="_blank" class="hover:text-accent-blue border-b border-transparent hover:border-accent-blue">
        {title}
      </a>
    {:else}
      {title}
    {/if}
  </h3>

  <p class="text-light mt-1">
    {authors}
  </p>

  <p class="text-light text-sm italic">
    {venue}, {year}
  </p>
</div>
