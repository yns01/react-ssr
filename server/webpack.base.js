module.exports = {
  // Import JS/JSX files without specifying the extension
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /.jsx?$/, // Match both .js and .jsx
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
};
