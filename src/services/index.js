import Request from '@/utils/request';

// http://wiki.tools.msparis.com/pages/viewpage.action?pageId=1015930
export const getBanner = (params) =>
  Request('api/web/banner/query', {
    method: 'POST',
    data: params,
    config: {
      isToast: false
    }
  });

// http://wiki.tools.msparis.com/pages/viewpage.action?pageId=2130801
export const queryProductList = (params = {}) =>
  Request('api/web/product/queryProductList', {
    method: 'POST',
    data: params,
    config: {
      isToast: false
    }
  });

// wiki: http://wiki.tools.msparis.com/pages/viewpage.action?pageId=1016417
export const queryProductCategories = (params) =>
  Request('api/web/product/queryProductCategories', {
    method: 'POST',
    data: params,
    config: {
      isToast: false
    }
  });
export const productDetail = (params) =>
  Request('api/web/product/productDetail', {
    method: 'POST',
    data: params,
    config: {
      isToast: false
    }
  });
