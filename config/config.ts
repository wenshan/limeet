import { defineConfig } from 'umi';
import routes  from './routes';

const path = require("path");
const pxtorem = require('postcss-pxtorem');
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
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
    antd: false, // 如果项目依赖中包含 `antd`，则默认为 true
    baseNavigator: true,
    baseSeparator: '-',
    default: 'zh-CN',
    title: false,
    useLocalStorage: true,
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
  // styles: [`html, body { font-size: 16px !important; }`],
});
