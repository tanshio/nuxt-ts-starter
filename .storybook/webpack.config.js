// const path = require('path');
// const merge = require('webpack-merge');
//
// module.exports = (storybookBaseConfig, configType, config) => {
//   return merge(config, {
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           loader: 'ts-loader',
//           options: {
//             appendTsSuffixTo: [/\.vue$/]
//           }
//         },
//         {
//           test: /\.sass$/,
//           use: [
//             'vue-style-loader',
//             'css-loader',
//             {
//               loader: 'postcss-loader',
//               options: {
//                 // postcssのプラグインを追加
//               }
//             }
//           ]
//         }
//       ]
//     },
//
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, '../')
//       },
//       extensions: ['.js', '.ts']
//     }
//   });
// };

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

  config.module.rules.push({ test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] });

  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.vue', '.css', '.scss', '.html');

  return config;
};
