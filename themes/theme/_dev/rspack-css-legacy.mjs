import { rspack } from '@rspack/core';

export default {
  plugins: [
    new rspack.CssExtractRspackPlugin({ filename: 'css/[name].css'}),
  ],
  experiments: {
    css: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'javascript/auto',
        use: [
          rspack.CssExtractRspackPlugin.loader,
          { loader: "css-loader", options: { url: false } },
        ],
      },
    ],
  },
};
