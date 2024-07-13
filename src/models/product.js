import { getBanner, queryProductList, queryProductCategories, productDetail } from '@/services/index';

export default {
  namespace: 'product',
  state: {
    id: '',
    pagination: {
      current: 1,
      pageSize: 20,
      total: 0
    },
    hotProductList: [],
    productList: [],
    productCategories: [],
    productDetail: {
      product_detail: [
        {
          attribute_name: '123123',
          attribute_value: '456'
        },
        {
          attribute_name: '789',
          attribute_value: '000'
        }
      ],
      image_link: [],
      additional_image_link: [],
      lifestyle_image_link: []
    }
  },
  effects: {
    *queryProductAll({ payload: data }, { call, put, select }) {
      const { userid, language } = yield select((state) => state.common);
      const { pagination } = yield select((state) => state.home);
      const { current, pageSize } = pagination;
      if (current && pageSize && language && userid) {
        const result = yield call(queryProductList, { current, pageSize, language, userid, ...data });
        if (result && result.status && result.status === 200 && result.data.rows) {
          const updatePagination = Object.assign({}, pagination, { total: result.data.count });
          if (data.from && data.from === 'home') {
            yield put({
              type: 'update',
              payload: {
                hotProductList: result.data.rows,
                pagination: updatePagination
              }
            });
          } else {
            yield put({
              type: 'update',
              payload: {
                productList: result.data.rows,
                pagination: updatePagination
              }
            });
          }
        } else {
          // message.warning({ content: result.msg });
          console.log(result.msg);
        }
      } else {
        // message.warning({ content: '缺少查询字段！' });
        console.log('缺少查询字段！');
      }
    },
    *queryProductCategories({ payload: data }, { call, put, select }) {
      const { userid, language } = yield select((state) => state.common);
      if (language && userid) {
        const result = yield call(queryProductCategories, { userid, language });
        if (result && result.status && result.status === 200 && result.data.rows) {
          yield put({
            type: 'update',
            payload: {
              productCategories: result.data.rows
            }
          });
        }
      }
    },
    *queryProductDetail({ payload: data }, { call, put, select }) {
      const { userid, language } = yield select((state) => state.common);
      const { id } = data;
      if (language && userid && id) {
        const result = yield call(productDetail, { userid, language, id: Number(id) });
        if (result && result.status && result.status === 200 && result.data) {
          yield put({
            type: 'update',
            payload: {
              productDetail: result.data
            }
          });
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
