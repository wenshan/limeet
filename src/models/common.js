/* eslint-disable no-undef */
import QueryString from 'query-string';
import Cookie from 'js-cookie';
import { setLocale, getAllLocales, getLocale } from 'umi';

const DEV_ENV = process.env.DEV_ENV;

export default {
  namespace: 'common',
  state: {
    userid: 217,
    language: 'en-US',
    fromType: 0,
    platform: 'wap',
    projectId: '1747727677',
    currentPath: '/index.html'
  },
  subscriptions: {
    setup({ dispatch, history }) {
      const query = QueryString.parse(window.location.search);
      const lang = query.lang || Cookie.get('lang') || 'en-US';
      if (lang) {
        setLocale(lang, false);
        Cookie.set('lang', lang);
        dispatch({
          type: 'update',
          payload: {
            language: lang
          }
        });
      }
    }
  },

  effects: {},

  reducers: {
    update(state, { payload: data }) {
      return { ...state, ...data };
    }
  }
};
