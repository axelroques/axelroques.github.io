import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  base: '/', // user page is served at root (https://axelroques.github.io/)
  plugins: [svelte()]
});
