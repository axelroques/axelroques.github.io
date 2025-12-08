<script>
    import Publication from "../components/Publication.svelte";
  import Box from "../components/Box.svelte";

  const publications = [
    {
      title: "Cognitive Structure in Statistical Learning",
      authors: "A. Roques, M. Smith",
      venue: "Journal of Cognitive Theory",
      year: 2024,
      link: "https://example.com/paper1"
    },
    {
      title: "Emergent Representations in Artificial Agents",
      authors: "A. Roques",
      venue: "AI & Mind",
      year: 2023,
      link: "https://example.com/paper2"
    },
    {
      title: "On Explanations in Complex Systems",
      authors: "A. Roques, J. Doe",
      venue: "Philosophy of Science",
      year: 2022
    }
  ];
</script>

<Box id="publications" title="Publications">
  {#each publications as pub}
    <Publication {...pub} />
  {/each}
</Box>
