import QueryString from 'query-string';
import { getBanner, queryProductList } from '@/services/index';

export default {
  namespace: 'detail',
  state: {
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
  },
  effects: {},
  reducers: {
    update(state, { payload: data }) {
      return { ...state, ...data };
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
        const query = QueryString.parse(search);
        console.log('query:', query);
        console.log('pathname:', pathname);
      });
    }
  }
};
