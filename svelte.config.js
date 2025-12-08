import { sveltePreprocess } from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    postcss: true, // ensures Tailwind/PostCSS works in .svelte files
  }),
  compilerOptions: {
    compatibility: { componentApi: 4 } // for Svelte 5
  },
};
