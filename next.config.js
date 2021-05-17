

const withSass = require("@zeit/next-sass");
// module.exports = withSass({
//   cssModules: false,
// }
// );

module.exports = withSass({
  cssModules: false,
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
})


