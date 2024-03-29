import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

const env = dotenv.config().parsed


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	define: {
		'process.env': env
	}
})
