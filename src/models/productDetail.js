/* eslint-disable no-undef */
import QueryString from 'query-string';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { useModel, history, setLocale } from 'umi';

import {
  getBanner,
  queryProductList,
  queryProductCategories,
  productDetail,
  queryProductGroup
} from '@/services/index';

function ProductDetail() {
  const projectId = '1747727677';
  const { language, setLanguage } = useModel('common');
  const query = QueryString.parse(window.location.search);
  if (!query || !(query && query.id && query.product_id && query.lang)) {
    return false;
  }
  const [ id, setProductId ] = useState(query.id);
  const [ product_detail, setProductDetail ] = useState();

  const getProductDetail = async () => {
    if (query.lang) {
      setLanguage(query.lang);
      setLocale(query.lang);
    }
    const { id, product_id, lang} = query;
    const result = await productDetail({ id, product_id, projectId, language:lang });
    if (result && result.status === 200 && result.data) {
      setProductDetail(result.data);
    }
  };
  useEffect(
    () => {
      getProductDetail();
    },
    [ id, query.product_id]
  );
  return {
    product_detail,
    id,
    setProductDetail,
    setProductId
  };
}

export default ProductDetail;
