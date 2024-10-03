import { defineConfig } from 'umi';
import routes  from './routes';

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
  publicPath: isDev ? '/' : 'https://img.dreamstep.top/limeet/dist/',
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
  scripts: [
    { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js', defer: true, crossorigin: 'anonymous' },
    { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js', defer: true, crossorigin: 'anonymous' },
    { src: 'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/react-bootstrap/react-bootstrap.min.js', defer: true, crossorigin: 'anonymous' },
  ],
  headScripts: [{src:'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/supportImageType.js', defer: true, crossOrigin: 'anonymous'},{ src: 'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/react-bootstrap/react-bootstrap.min.js', defer: true, crossorigin: true }],
  styles: [`html, body { font-size: 16px !important; }`],
});
