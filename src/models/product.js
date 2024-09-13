import {
  getBanner,
  queryProductList,
  queryProductCategories,
  productDetail,
  queryProductGroup
} from '@/services/index';

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
          attribute_name: '',
          attribute_value: ''
        },
        {
          attribute_name: '',
          attribute_value: ''
        }
      ],
      image_link: [],
      additional_image_link: [],
      lifestyle_image_link: [],
      item_group_id: ''
    },
    productItemGroup: {}
  },
  effects: {
    *queryProductAll({ payload: data }, { call, put, select }) {
      const { language, projectId } = yield select((state) => state.common);
      const { pagination } = yield select((state) => state.home);
      const { current, pageSize } = pagination;
      if (current && pageSize && language && projectId) {
        const result = yield call(queryProductList, { current, pageSize, language, projectId, ...data });
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
      const { projectId, language } = yield select((state) => state.common);
      if (language && projectId) {
        const result = yield call(queryProductCategories, { projectId, language });
        if (result && result.status && result.status === 200 && result.data.rows) {
          const productCategories = [];
          result.data.rows.forEach((item) => {
            if (item && item.title !== '默认') {
              productCategories.push(item);
            }
          });
          yield put({
            type: 'update',
            payload: {
              productCategories: productCategories
            }
          });
        }
      }
    },
    *queryProductDetail({ payload: data }, { call, put, select }) {
      const { projectId, language } = yield select((state) => state.common);
      const { id } = data;
      if (language && projectId && id) {
        const result = yield call(productDetail, { projectId, language, id: Number(id) });
        if (result && result.status && result.status === 200 && result.data) {
          yield put({
            type: 'update',
            payload: {
              productDetail: result.data
            }
          });
          // 获取分组数据
          if (result && result.data && result.data.item_group_id) {
            yield put({
              type: 'queryProductGroup',
              payload: {
                item_group_id: result.data.item_group_id,
                current: 1,
                pageSize: 4
              }
            });
          }
        }
      }
    },
    *queryProductGroup({ payload: data }, { call, put, select }) {
      const { language, projectId } = yield select((state) => state.common);
      const { productDetail } = yield select((state) => state.product);
      const { item_group_id, pageSize, current } = data;
      if (language && productDetail && item_group_id) {
        const result = yield call(queryProductGroup, { language, projectId, item_group_id });
        if (result && result.status && result.status === 200 && result.data) {
          yield put({
            type: 'update',
            payload: {
              language,
              productItemGroup: result.data,
              pageSize,
              current
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
