import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  chainWebpack(memo) {
    memo.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin');
  },
});
