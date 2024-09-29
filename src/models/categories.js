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

const allCategories = {
  key: 'all',
  title: 'All'
};

function Categories() {
  const projectId = '1747727677';
  const [ categories, setCategories ] = useState([]);
  const [ product_type_id, setProductTypeId ] = useState([]);
  const getCategories = async () => {
    const result = await queryProductCategories({ projectId });
    if (result && result.status && result.status === 200 && result.data.rows) {
      const rows = [];
      rows.push(allCategories);
      result.data.rows.length && result.data.rows.forEach((row) => rows.push(row));
      setCategories(rows);
      setProductTypeId(rows[0].key);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return {
    categories,
    setCategories,
    product_type_id,
    setProductTypeId
  };
}
export default Categories;
