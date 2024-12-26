import { defineConfig } from 'dumi';

export default defineConfig({
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
