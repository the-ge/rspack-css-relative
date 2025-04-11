import { rspack } from '@rspack/core';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mode = process.env.NODE_ENV ?? 'production';
const isProductionMode = mode === 'production';

export default {
  mode: mode,
  context: __dirname,
  entry: {
    index: ['./css/index.css', './js/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../assets/'), // output directory as an absolute path
    publicPath: path.resolve(__dirname, '../assets/'), // base URL path prefix for bundled static assets
    filename: 'js/[name].js',
    cssFilename: 'css/[name].css',
    clean: false, // important!
  },
  optimization: {
    minimize: isProductionMode,
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({
        extractComments: isProductionMode,
      }),
      new rspack.LightningCssMinimizerRspackPlugin({
        minify: isProductionMode,
      })
    ]
  },
  devtool: isProductionMode ? false : 'eval',
};
