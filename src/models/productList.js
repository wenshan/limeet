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

const paginationInit = {
  current: 1,
  pageSize: 20,
  total: 0
};
const queryParamsInit = {
  product_type_id: 'all'
};

function ProductList() {
  const projectId = '1747727677';
  const [ queryParams, setQueryParams ] = useState(queryParamsInit);
  const [ productList, setProductList ] = useState([]);
  const [ pagination, setPagination ] = useState(paginationInit);
  const getProductList = async () => {
    const result = await queryProductList({ projectId, ...pagination, ...queryParams });
    if (result && result.status === 200 && result.data) {
      setProductList(result.data);
      setPagination(Object.assign({}, pagination, { total: result.data.count }));
    }
  };
  useEffect(
    () => {
      getProductList();
    },
    [ queryParams ]
  );
  return {
    productList,
    pagination,
    setPagination,
    queryParams,
    setQueryParams
  };
}

export default ProductList;
