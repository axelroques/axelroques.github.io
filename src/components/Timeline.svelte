<script>
    import Experience from './Experience.svelte';
    import Selector from "./Selector.svelte";

    import PostdocIrcam from './experiences/PostdocIrcam.svelte';
    import ESPCI from './experiences/ESPCI.svelte';
    import MSc from './experiences/MSc.svelte';
    import PhD from './experiences/PhD.svelte';

    let experiences = [
        {
            title: "Eng.",
            description: "Engineering school",
            institution: "ESPCI Paris",
            years: "2017-2021",
            component: ESPCI
        },
        {
            title: "MSc",
            description: "MSc in Biomedical Engineering in Neuroscience",
            institution: "Université Paris-Cité, Arts et Métiers",
            years: "2020-2021",
            component: MSc
        },
        {
            title: "PhD",
            description: "PhD in Applied Mathematics",
            institution: "Laboratoire GBCM, Centre Borelli",
            years: "2022-2025",
            component: PhD
        },
        {
            title: "Postdoc",
            description: "Postdoc on human-machine interaction",
            institution: "Sound Perception and Design, STMS Lab, Ircam",
            years: "2026-2027",
            component: PostdocIrcam
        },
    ];

    let selectedIndex = experiences.length - 1; // last by default
</script>

<div class="space-y-6">
    <Selector bind:selectedIndex items={experiences} />

    <!-- Experience display area -->
    <div class="mt-6">
    <Experience 
        description={experiences[selectedIndex].description}
        institution={experiences[selectedIndex].institution}
        years={experiences[selectedIndex].years}
    >
        <svelte:component this={experiences[selectedIndex].component} />
    </Experience>
    </div>
</div>
