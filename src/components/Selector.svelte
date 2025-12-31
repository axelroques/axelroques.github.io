<script>
  // Props
  export let items = [];
  export let selectedIndex = items.length - 1; // default to last

  function select(index) {
    selectedIndex = index;
  }

  function prev() {
    if (selectedIndex > 0) selectedIndex -= 1;
  }

  function next() {
    if (selectedIndex < items.length - 1) selectedIndex += 1;
  }
</script>

<div class="flex justify-center items-center w-full gap-2">

  <!-- Left arrow (desktop only) -->
  <button
    class="hidden md:flex p-2 text-light hover:text-lightest hover:cursor-pointer disabled:opacity-50"
    title="Previous element"
    on:click={prev}
    disabled={selectedIndex === 0}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
    </svg>
  </button>

  <!-- Rectangle selector -->
  <div
    class="
      flex md:grid
      md:grid-flow-col md:auto-cols-max
      overflow-x-auto md:overflow-visible
      scrollbar-hide
    "
  >
    {#each items as item, i}
      <button
        class="
          flex-shrink-0
          w-20 sm:w-24 h-12
          border-2 border-lightest
          flex items-center justify-center
          transition-colors duration-200
          cursor-pointer
          {i === selectedIndex
            ? 'bg-lightest text-darkest'
            : 'text-lightest'}
        "
        on:click={() => select(i)}
      >
        {item.title}
      </button>
    {/each}
  </div>

  <!-- Right arrow (desktop only) -->
  <button
    class="hidden md:flex p-2 text-light hover:text-lightest hover:cursor-pointer disabled:opacity-50"
    title="Next element"
    on:click={next}
    disabled={selectedIndex === items.length - 1}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
    </svg>
  </button>

</div>
