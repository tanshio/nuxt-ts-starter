const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /.*\.(ts|tsx)$/,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/]
    }
  });

  config.module.rules.push({
    test: /\.stories\.(ts|tsx|js|jsx)$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })

  config.module.rules.push({ test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] });

  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.vue', '.css', '.scss', '.html');

  return config;
};
