import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugIn = {
	registerType: 'autoUpdate',
	includeAssests: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
	manifest: {
		name: 'Mezimeet-App',
		short_name: 'mezimeet',
		description: 'Events listing app search for cities',
		icons: [
			{
				src: 'pwa-64x64.png',
				sizes: '64x64',
				type: 'image/png',
			},
			{
				src: 'pwa-144x144.png',
				sizes: '144x144',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: 'pwa-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: 'pwa-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: 'maskable-icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable',
			},
		],
		theme_color: '#171717',
		background_color: '#f0e7db',
		display: 'standalone',
		scope: '/',
		start_url: '/mezimeet/',
		orientation: 'portrait',
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	base: '/mezimeet/',
	plugins: [react(), VitePWA(manifestForPlugIn)],
});
