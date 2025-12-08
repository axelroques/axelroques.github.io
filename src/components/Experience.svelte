<script>
    export let institution;
    export let description;
    export let years;
</script>

<div class="p-4 border-t-2 border-b-2 border-light hover:border-lightest transition-colors">
    <div class="flex items-center justify-between">
        <h2 class="text-lightest text-xl font-semibold">{description}</h2>
        <p class="text-accent-grey text-sm italic">{years}</p>
    </div>

    <p class="text-light text-sm italic">{institution}</p>

    <div class="mt-3 text-light">
        <slot />
    </div>
</div>
