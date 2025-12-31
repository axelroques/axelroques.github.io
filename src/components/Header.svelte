<script>
    import { currentRoute, navigate } from "../lib/router.js";

    // Small screens
    let menuOpen = false;
</script>

<header class="w-full bg-dark sticky top-0 z-20 border-b-2 border-darkest">
  <div class="max-w-screen-xl mx-auto px-4 py-4">

    <!-- Top row -->
    <div class="flex items-center justify-between">

      <!-- Title -->
      <h1 class="py-2 text-2xl tracking-widest text-lightest border-b">
        Axel Roques.
      </h1>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex space-x-4 text-light">
        <button
          on:click={() => navigate("/about")}
          class="border-b border-transparent hover:border-lightest hover:text-lightest cursor-pointer
            {$currentRoute === '/about' ? 'text-lightest !border-lightest' : ''}"
        >
          About
        </button>

        <button
          on:click={() => navigate("/publications")}
          class="border-b border-transparent hover:border-lightest hover:text-lightest cursor-pointer
            {$currentRoute === '/publications' ? 'text-lightest !border-lightest' : ''}"
        >
          Publications
        </button>

        <button
          on:click={() => navigate("/resources")}
          class="border-b border-transparent hover:border-lightest hover:text-lightest cursor-pointer
            {$currentRoute === '/resources' ? 'text-lightest !border-lightest' : ''}"
        >
          Resources
        </button>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden text-lightest focus:outline-none"
        on:click={() => (menuOpen = !menuOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

    </div>

    <!-- Mobile menu -->
    {#if menuOpen}
      <nav class="md:hidden mt-4 flex flex-col space-y-3 text-lightest">
        <button
            on:click={() => { navigate("/about"); menuOpen = false; }}
            class="text-left border-r-15 ml-5
                {$currentRoute === '/about' ? 'border-light text-light' : 'border-transparent'}"
        >
          > About
        </button>

        <button
          on:click={() => { navigate("/publications"); menuOpen = false; }}
          class="text-left border-r-15 ml-5
            {$currentRoute === '/publications' ? 'border-light text-light' : 'border-transparent'}"
        >
          > Publications
        </button>

        <button
          on:click={() => { navigate("/resources"); menuOpen = false; }}
          class="text-left border-r-15 ml-5
            {$currentRoute === '/resources' ? 'border-light text-light' : 'border-transparent'}"
        >
          > Resources
        </button>
      </nav>
    {/if}

  </div>
</header>
