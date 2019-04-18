const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require("path");
module.exports = (storybookBaseConfig, configType, config) => {

  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html')

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true // used with ForkTsCheckerWebpackPlugin
        },
      }
    ],
  })

  config.module.rules.push({
    test: /\.pug$/,
    loader: 'pug-plain-loader'
  })

  // config.resolve = {
  //   extensions: ['.js', '.vue', '.json'],
  //     alias: {
  //     'assets': path.resolve('path/to/assets'),
  //       '~': path.resolve(__dirname, '../')
  //   }
  // }

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  return config;
};
