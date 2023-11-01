import vue from '@vitejs/plugin-vue';
import path from 'path';

export default {
  plugins: [vue()],
  base: "/baseball-tweet/",
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: "docs"
  }
}
