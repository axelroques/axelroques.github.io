<script>
  import Timeline from "../components/Timeline.svelte";
  import Box from "../components/Box.svelte";
</script>

<div class="flex items-stretch justify-center">
  <Box id="about" title="About.">
    <div
      class="
        flex flex-col md:flex-row
        md:justify-between md:items-center
        gap-6 md:gap-4
      "
    >
      <!-- Avatar + icons -->
      <div
        class="
          flex flex-col
          justify-center items-center
          gap-4 md:gap-4
        "
      >
        <div class="hidden md:flex justify-center items-center border-2 border-lightest rounded-full p-2">
          <img src="/rose.svg" alt="rose" class="">
        </div>

        <div class="flex justify-center items-center text-light space-x-3">
          <a
            href="mailto:axel.roques@ens-paris-saclay.fr"
            title="Mail"
            class="hover:text-lightest hover:scale-110 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </a>

          <a
            href="https://github.com/axelroques/"
            title="Github"
            target="_blank"
            class="hover:text-lightest hover:scale-110 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Text -->
      <p
        class="
          leading-relaxed text-light text-justify md:px-4
          max-w-prose
          mx-auto md:mx-0
        "
      >
        I'm an Eng./PhD, interested in interdisciplinary approaches to the study of human behavior when faced with complex human-machine interfaces. 
        My work explores the mechanisms of these interactions, such as the emergence of general strategies, repeated patterns of behavior, or differences in perceptual-motor style.
      </p>
    </div>
  </Box>
</div>


<Box id="timeline">
  <Timeline/>
</Box>