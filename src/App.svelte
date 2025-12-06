
<script>
  let year = new Date().getFullYear();
</script>

<nav class="border-b py-4">
  <div class="container mx-auto px-4 flex items-center gap-4">
    <a href="/" class="font-semibold text-lg">Your Name</a>
    <div class="flex-1"></div>
    <a href="#research" class="text-sm">Research</a>
    <a href="#publications" class="ml-4 text-sm">Publications</a>
    <a href="#contact" class="ml-4 text-sm">Contact</a>
  </div>
</nav>

<main class="container mx-auto px-4 py-8">
  <section id="intro" class="mb-8">
    <h1 class="text-3xl font-bold mb-2">Your Name</h1>
    <p class="text-lg text-gray-700">Short description: researcher, field, affiliation.</p>
  </section>

  <section id="research" class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">Research</h2>
    <p>Brief summary of research interests.</p>
  </section>

  <section id="publications" class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Publications</h2>
    <ul class="space-y-2">
      <li>Paper A — <em>venue</em>, 2024</li>
      <li>Paper B — <em>venue</em>, 2023</li>
    </ul>
  </section>

  <section id="contact" class="mb-12">
    <h2 class="text-2xl font-semibold mb-2">Contact</h2>
    <p><a href="mailto:you@example.com" class="underline">you@example.com</a></p>
  </section>
</main>

<footer class="border-t py-4">
  <div class="container mx-auto px-4 text-sm text-gray-600">
    © {year} Your Name — <a href="/cv.pdf" class="underline">CV</a>
  </div>
</footer>
