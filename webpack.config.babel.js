import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: [
    'babel-polyfill',
    'react-table/react-table.css',
    `${__dirname}/src/app.jsx`,
  ],
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
    publicPath: '',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      shared: `${__dirname}/src/shared`,
      assets: `${__dirname}/assets`,
    },
  },
  module: {
    rules: [
      {
        test: /(\.jsx?)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/url',
          'url-loader?limit=10000',
          'extract-loader',
          `css-loader?root=${__dirname}/assets}`,
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)(\?\S*)?$/,
        use: [
          // Imagenes debajo de 25k seran incrustadas en el bundle como Data Url
          'url-loader?limit=25000',
          // Compresion de imagenes [https://www.npmjs.com/package/image-webpack-loader]
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { quality: 65 },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              svgo: {
                plugins: [
                  { removeViewBox: false },
                  { removeEmptyAttrs: false },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
        query: {
          classIdPrefix: '[name]-[hash:8]__',
          propsMap: { fillRule: 'fill-rule' },
          xmlnsTest: /^xmlns.*$/,
        },
      },
    ],
  },
  node: {
    __dirname: true,
    __filename: true,
    global: true,
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8081',
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: `${__dirname}/build`,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/index.html` }),
  ],
}
