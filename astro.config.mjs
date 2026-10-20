// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	// TODO: replace with your GitHub Pages URL.
	site: 'https://twilightharvest.github.io',
	// TODO: if the repo is NOT named `YOUR-USERNAME.github.io`, uncomment and set to '/<repo-name>'.
	// base: '/blog',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			wrap: false,
		},
	},
});
