/* eslint-disable no-undef */
import QueryString from 'query-string';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { useModel, history } from 'umi';

import {
  getBanner,
  queryProductList,
  queryProductCategories,
  productDetail,
  queryProductGroup
} from '@/services/index';

function ProductDetail() {
  const projectId = '1747727677';
  const query = QueryString.parse(window.location.search);
  if (!query || !(query && query.id)) {
    return false;
  }
  const [ id, setProductId ] = useState(query.id);
  const [ product_detail, setProductDetail ] = useState();

  const getProductDetail = async () => {
    const result = await productDetail({ id, projectId });
    if (result && result.status === 200 && result.data) {
      setProductDetail(result.data);
    }
  };
  useEffect(
    () => {
      getProductDetail();
    },
    [ id ]
  );
  return {
    product_detail,
    id,
    setProductDetail,
    setProductId
  };
}

export default ProductDetail;
