/** @type {import('next').NextConfig} */
const path = require('path');/*eslint-env es6*/
const {
  NODE_ENV
} = process.env;
const isProdMode = NODE_ENV === 'production';

const nextConfig = {
  distDir: '.next',
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  experimental: {
    externalDir: true,
    outputFileTracingRoot: path.join(__dirname, '../..'),
  },
  eslint: {
    ignoreDuringBuilds: isProdMode,
  },
  webpack: (config, { isServer }) => {
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000',
      },
     {
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
     }
    ];

    config.plugins = [
      ...(config.plugins || []),
      //new DotenvWebpackPlugin(),
      // new CopyWebpackPlugin({
      //     patterns: [
      //         {
      //             from: 'node_modules/pdfjs-dist/cmaps/',
      //             to: 'cmaps/'
      //         },
      //     ]
      // }),
    ];
    // if (!isServer) {
    //   config.node = {
    //     fs: 'empty',
    //     child_process: 'empty',
    //   };
    // }
    return config;
  },
}

module.exports = nextConfig
