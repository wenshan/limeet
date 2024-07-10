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
    image_link: [
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E4%B8%BB%E5%9B%BE_1.jpg',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E4%B8%BB%E5%9B%BE_2.jpg',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E4%B8%BB%E5%9B%BE_3.jpg',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E4%B8%BB%E5%9B%BE_4.jpg'
    ],
    additional_image_link: [
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E8%AF%A6%E6%83%85%E5%9B%BE_1.png',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E8%AF%A6%E6%83%85%E5%9B%BE_2.png',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E8%AF%A6%E6%83%85%E5%9B%BE_3.png',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E8%AF%A6%E6%83%85%E5%9B%BE_4.png',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E8%AF%A6%E6%83%85%E5%9B%BE_5.png',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E8%AF%A6%E6%83%85%E5%9B%BE_6.png',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E8%AF%A6%E6%83%85%E5%9B%BE_7.png',
      'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/%E8%AF%A6%E6%83%85%E5%9B%BE_8.png'
    ]
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
