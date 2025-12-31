<script>
    export let institution;
    export let description;
    export let years;
</script>

<div class="p-4 border-t-2 border-b-2 border-light hover:border-lightest transition-colors">
    <h2 class="text-lightest text-xl font-semibold">{description}</h2>
    <p class="text-light text-sm italic">{institution}</p>
    <p class="text-accent-grey text-sm italic">{years}</p>

    <div class="mt-3 text-light">
        <slot />
    </div>
</div>
