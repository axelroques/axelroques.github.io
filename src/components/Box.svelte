<script>
  export let id = "";
  export let title = "";
</script>

<section id={id} class="w-full flex justify-center py-2 px-4">
  <div class="max-w-3xl w-full p-8 border-2 border-darkest rounded-lg bg-dark-light shadow-lg text-text-dark-secondary">
    {#if title}
      <div class="flex items-center mb-4">
        <h2 class="text-2xl font-medium text-lightest border-b">
          {title}
        </h2>
      </div>
    {/if}

    <slot />
  </div>
</section>
