import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/Key-UI/',
  publicPath: '/Key-UI/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Key-UI',
  },
  favicons: ['/favicon.png'],
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
});
