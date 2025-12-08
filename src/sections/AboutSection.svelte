<script>
  import Timeline from "../components/Timeline.svelte";
  import Box from "../components/Box.svelte";
</script>

<div class="flex items-stretch justify-center">
  <Box id="about" title="About.">
    <div class="flex justify-between items-center space-x-4">
      <div class="flex justify-center items-center">
        <img src="/rose.svg" alt="rose" class="">
      </div>
      <p class="leading-relaxed text-light text-justify">
        I'm an Eng./PhD, interested in interdisciplinary approaches to study human behavior when faced with complex human-machine interfaces. 
        My work explores the mechanisms of these interactions, such as the emergence of general strategies, repeated patterns of behavior, or differences in perceptual-motor style.
      </p>
    </div>
  </Box>
</div>


<Box id="timeline">
  <Timeline/>
</Box>