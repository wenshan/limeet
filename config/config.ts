import { defineConfig } from 'umi';
import routes from './routes';

const path = require("path");
const pxtorem = require('postcss-pxtorem');
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  title: 'Limeet - Creating a Warm Home for Pets.',
  metas: [
    { name: 'keywords', content: 'Limeet, pet, cat jump, cats as pets' },
    { name: 'description', content: 'Limeet, We design many creative cat furniture items, allowing cats and people to coexist warmly.' },
  ],
  outputPath: 'dist',
  /*
  ssr: {
    serverBuildPath: './dist/umi.server.js'
  },
  */
  model: {},
  antd: {},
  request: {},
  initialState: {},
  fastRefresh: true,
  history: { type: 'browser' },
  mock: {
    include: ['src/pages/**/_mock.ts'],
  },
  dva: {},
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
  publicPath: isDev ? '/' : 'https://img.limeetpet.com/limeet/dist/',
  routes: routes.routes,
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    default: 'zh-CN',
    baseSeparator: '-',
  },
  alias: {
    '@': path.join(__dirname, "./src")
  },
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 32,
      unitPrecision: 5,
      propList: ['*'],
    }),
  ],
  analytics: {
    ga_v2: 'GTM-MBQ58SPM',
    baidu: 'e3e4ff6865d2ba690ff30184ec5758e8',
  },
  crossorigin: true,
  esbuildMinifyIIFE: true,
  scripts: [],
  headScripts: [
    { src: 'https://img.limeetpet.com/limeet/supportImageType.js', defer: true, crossOrigin: 'anonymous' },
  ],
  styles: [`html, body { font-size: 16px !important; }`],
});
