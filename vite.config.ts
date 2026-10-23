import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from devbites.com/collegetrackr/ — change `base` if the site moves.
export default defineConfig({ base: '/collegetrackr/', plugins: [react()] });
