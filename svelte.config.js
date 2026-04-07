import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');
/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
        },
        prerender: {
			handleUnseenRoutes: 'warn'
		}
	}
};

export default config;
