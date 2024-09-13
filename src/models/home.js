import { getBanner, queryProductList } from '@/services/index';

export default {
  namespace: 'home',
  state: {
    swiperBanner: [],
    pagination: {
      current: 1,
      pageSize: 20,
      total: 0
    },
    productList: []
  },
  effects: {
    // 获取用户信息
    *getBanner({ payload }, { call, put, select }) {
      const { language, projectId } = yield select((state) => state.common);
      if (language) {
        const type = 'home';
        const channel = 'limeetpet';
        const result = yield call(getBanner, { language, projectId, type, channel });
        if (result && result.status == 200 && result.data && result.data && result.data.rows) {
          const bannerItem = [];
          if (result.data.rows && result.data.rows.length) {
            result.data.rows.forEach((item) => {
              if (item.is_show) {
                bannerItem.push(item);
              }
            });
          }
          yield put({ type: 'update', payload: { swiperBanner: bannerItem } });
        } else {
          console.log('数据错误');
        }
      }
    }
  },
  reducers: {
    update(state, { payload: data }) {
      return { ...state, ...data };
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {}
  }
};
