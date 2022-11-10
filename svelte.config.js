import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        scss: true,
        postcss: true
    }),

    target: '#svelte',
    kit: {
        adapter: adapter(),
        alias: {
            '@styles': './src/styles'
        }
    }
}

export default config
