import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'js-storage',
            // the proper extensions will be added
            fileName: 'index',
            formats: ['es']
        },
    },
})