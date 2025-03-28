export const prerender = true;
import type { Config } from '@sveltejs/adapter-vercel';
import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

export const config: Config = {
	runtime: 'nodejs22.x'
};

injectAnalytics({ mode: dev ? 'development' : 'production' });
