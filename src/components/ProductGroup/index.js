import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Row, Col, Container } from 'react-bootstrap';
import {
  getBanner,
  queryProductList,
  queryProductCategories,
  productDetail,
  queryProductGroup
} from '@/services/index';

import './index.less';

const paginationInit = {
  current: 1,
  pageSize: 4
};

function ProductGroup() {
  const { projectId, language } = useModel('common');
  const { product_detail } = useModel('productDetail');
  const { itemGroupList, setItemGroupList } = useState([]);
  const { pagination, setPagination } = useState(paginationInit);
  const { total, setTotal } = useState(0);
  const { item_group_id } = product_detail;
  const getItemGroupList = async () => {
    const result = await queryProductGroup({ pagination, language, projectId, item_group_id });
    if (result && result.status === 200 && result.data && result.data.rows) {
      setItemGroupList(result.data.rows);
      setTotal(result.data.total);
    }
  };

  useEffect(
    () => {
      getItemGroupList();
    },
    [ item_group_id, pagination ]
  );
  const prev = () => {
    const { current } = pagination;
    const page = current - 1;
    const pagePagination = Object.assign({}, pagination, { current: page });
    setPagination(pagePagination);
  };
  const next = () => {
    const { current } = pagination;
    const page = current + 1;
    const pagePagination = Object.assign({}, pagination, { current: page });
    setPagination(pagePagination);
  };
  const listAttr = () => {
    const html = [];
    if (itemGroupList && itemGroupList.length) {
      itemGroupList.map((item, idx) => {
        html.push(
          <li key={`${item.id}_${idx}`}>
            <div className='item'>
              <div className='img-box'>
                <img src={item.image_link} />
              </div>
              <div className='title'>{item.title}</div>
              <div className='price'>
                <i className='unit'>{item.monetary_unit}</i>
                <span className='value'>{item.sale_price}</span>
                <span className='original-value'>-{item.discount}%</span>
              </div>
            </div>
          </li>
        );
      });
    }
    return html;
  };
  return (
    <Container className='product-group clearfix'>
      <div className='prev' onClick={prev}>
        prev
      </div>
      <ul>{listAttr()}</ul>
      <div className='next' onClick={next}>
        next
      </div>
    </Container>
  );
}
export default ProductGroup;
