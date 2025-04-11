export default ({
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        // 'Module not found: Can't resolve' for CSS URLs
        test: /\.css$/,
        type: 'css',
      },
    ],
  },
});
