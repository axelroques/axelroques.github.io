<script>
  // Props
  export let items = [];
  export let selectedIndex = items.length - 1; // default to last

  // Functions to update selection
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

<div class="flex justify-center items-center space-x-2">
    
  <!-- Left arrow -->
  <button
    class="p-2 text-light hover:text-lightest hover:cursor-pointer disabled:opacity-50"
    title="Previous element"
    onclick={prev}
    disabled={selectedIndex === 0}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
    </svg>
  </button>

  <!-- Rectangle grid -->
  <div class="grid grid-flow-col auto-cols-max">
    {#each items as item, i}
      <button
        class="cursor-pointer w-24 h-12 border-2 border-lightest flex items-center justify-center transition-colors duration-200
          {i === selectedIndex ? 'bg-lightest text-darkest' : 'text-lightest'}"
        onclick={() => select(i)}
      >
        {item.title}
      </button>
    {/each}
  </div>

  <!-- Right arrow -->
  <button
    class="p-2 text-light hover:text-lightest hover:cursor-pointer disabled:opacity-50"
    title="Next element"
    onclick={next}
    disabled={selectedIndex === items.length - 1}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
    </svg>
  </button>
</div>
